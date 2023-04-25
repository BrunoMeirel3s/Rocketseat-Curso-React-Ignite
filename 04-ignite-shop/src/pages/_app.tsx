import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logoImg from "../asssets/logo.svg";
import { ButtonCart, Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import { CartProvider, useShoppingCart } from "use-shopping-cart";
import { Handbag } from "phosphor-react";
import { useEffect, useState } from "react";
import Menu from "./components/MenuBag";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const key = `${process.env.STRIPE_PUBLIC_KEY}`;
  const [showBag, setShowBag] = useState(false);

  //const { cartCount } = useShoppingCart();

  function handleOpenCloseMenu() {
    setShowBag(!showBag);
  }

  useEffect(() => {
    console.log(key);
  }, []);

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
          <ButtonCart onClick={handleOpenCloseMenu}>
            <Handbag size={24} />
            <span className="amountItensCart">1</span>
          </ButtonCart>
          {showBag && <Menu handleOpenCloseMenu={handleOpenCloseMenu} />}
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
