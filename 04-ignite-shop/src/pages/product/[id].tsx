import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/products";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  formatedPrice: number;
  description: string;
  defaultPriceId: string;
}

interface ProductProps {
  product: Product;
}
export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }
  const { query, isFallback } = useRouter();

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

  if (isFallback) {
    return <p>Loading.....</p>;
  }
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.formatedPrice}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={() => {
              handleAddItem(product);
            }}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  /**
   * O getStatisPaths é utilizado juntamente ao getStatisProps para passar
   * os ids que serão gerados no tempo do build, o fallback permite
   * gerar a página caso não seja passado id aqui no getStatisProps,
   * para casos de novas páginas ou algo neste sentido
   */
  return {
    paths: [{ params: { id: "prod_Nf8ALDuNm5xQON" } }],
    fallback: true,
  };
};

//Utilizado para gerar a página em tempo de build, permitindo cachear a página
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        formatedPrice: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount ? price.unit_amount / 100 : 0),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour - Seta o tempo de duração do cache da página
  };
};
