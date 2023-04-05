import type { AppProps } from "next/app";
//Components
import Layout from "@/components/Layout";
import Modal from "@/components/shared/Modal";
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
