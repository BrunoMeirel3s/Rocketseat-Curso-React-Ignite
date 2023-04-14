import { globalStyles } from "@/styles/global";
import { globalCss } from "../styles/index";
import type { AppProps } from "next/app";
import logoImg from "../asssets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <a href="/">
          <Image src={logoImg} alt="" />
        </a>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
