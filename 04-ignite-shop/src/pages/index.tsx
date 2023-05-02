import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { GetStaticProps } from "next";
import { Handbag } from "phosphor-react";

import "keen-slider/keen-slider.min.css";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  formattedPrice: number;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  const { addItem } = useShoppingCart();

  function handleAddItem(product: Product) {
    addItem({
      name: product.name,
      id: product.id,
      price: product.price,
      image: product.imageUrl,
      currency: "BRL",
    });
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product className="keen-slider__slide" key={product.id}>
              <Image src={product.imageUrl} width={500} height={460} alt="" />
              <footer>
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  prefetch={false}
                >
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.formattedPrice}</span>
                  </div>
                </Link>
                <button
                  onClick={() => {
                    handleAddItem(product);
                  }}
                >
                  <Handbag size={28} />
                </button>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}
/**
 * getStaticProps cria uma página estática do nosso código
 * o que permite melhorar o desempenho do site e evita ficar
 * carregando várias vezes conteúdos que são quase estáticos,
 * diferente do getServerSideProps o getStaticProps não possui
 * acesso a dados da sessão, ou do usuário ou afim pois roda em
 * tempo de build
 */
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      formattedPrice: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price?.unit_amount ? price?.unit_amount / 100 : 0),
    };
  });
  //console.log(response.data);
  return {
    props: { products },
    revalidate: 60 * 60 * 2, //2 hours
  };
};
