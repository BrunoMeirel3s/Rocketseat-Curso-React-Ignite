import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logoImg from "../asssets/logo.svg";
import { ButtonCart, Container } from "@/styles/pages/app";
import Image from "next/image";
import { CartProvider, useShoppingCart } from "use-shopping-cart";
import { Handbag } from "phosphor-react";
import { useEffect, useState } from "react";
import Menu from "./components/MenuBag";
import Header from "./components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const key = `pk_test_51Mtnl7IyfZm95NwN9iQh5rcfzWXxAobLHhCZCzOERvU3r7xWST1zxdwqFnACXBDTdC4Lh7uD0GFt29rV01AAVQao00IDgcEXL3`;

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
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
