import { stripe } from "@/lib/stripe";
import {
  ContainerProdutos,
  ImageContainer,
  SuccessContainer,
} from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

//const product = session.line_items!.data[0].price!.product as Stripe.Product;

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    description: string;
    price: {
      id: string;
      product: {
        images: string;
      };
    };
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada!</h1>

        <ContainerProdutos>
          {products.map((product, indexVetor) => {
            return (
              <ImageContainer style={{ zIndex: { indexVetor } }}>
                <Image
                  src={product.price.product.images[0]}
                  width={120}
                  height={110}
                  alt=""
                />
              </ImageContainer>
            );
          })}
        </ContainerProdutos>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          {products ? products.length : "0"} camisetas já está a caminho da sua
          casa.
        </p>

        <Link href="">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

/**
 * getServerSideProps permite pegar os dados que farão parte da página do lado
 * do servidor, o que nos permite realizar validações antes da página chegar para o cliente
 */
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details!.name;
  const products = session.line_items!.data;
  //const product = session.line_items!.data[0].price!.product as Stripe.Product;

  console.log(session.line_items!.data);

  return {
    props: {
      customerName,
      products: products,
    },
  };
};
