import type { AppProps } from "next/app";
//Components
import Layout from "@/components/Layout";
//Styles
import "@/styles/globals.css";
import { RegisterModal } from "@/components/modals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
