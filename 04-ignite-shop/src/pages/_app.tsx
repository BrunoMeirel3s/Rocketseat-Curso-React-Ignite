import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Container } from "@/styles/pages/app";
import { CartProvider } from "use-shopping-cart";
import Header from "./components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const key = `pk_test_51Mtnl7IyfZm95NwN9iQh5rcfzWXxAobLHhCZCzOERvU3r7xWST1zxdwqFnACXBDTdC4Lh7uD0GFt29rV01AAVQao00IDgcEXL3`;

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
