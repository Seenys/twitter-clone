import type { AppProps } from "next/app";
//Components
import Layout from "@/components/Layout";
//Styles
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
