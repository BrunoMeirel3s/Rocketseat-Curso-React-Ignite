import { globalCss } from "../styles/index";
import type { AppProps } from "next/app";

globalCss();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
