import { globalStyles } from "@/styles/global";
import { globalCss } from "../styles/index";
import type { AppProps } from "next/app";
import logoImg from "../asssets/logo.svg";
import { ButtonCart, Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import { CartProvider } from "use-shopping-cart";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const key = `${process.env.STRIPE_PUBLIC_KEY}`;
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={key}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>
        <Header>
          <a href="/">
            <Image src={logoImg} alt="" />
          </a>
          <ButtonCart>
            <Handbag size={24} />
            <span className="amountItensCart">2</span>
          </ButtonCart>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
