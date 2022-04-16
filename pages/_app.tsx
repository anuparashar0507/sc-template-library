import "../styles/globals.css";
import type { AppProps } from "next/app";
// import Header from "../src/components/Header/Header";
// import { Children } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Header>
    <Component {...pageProps} />
    // </Header>
  );
}

export default MyApp;
