import type { AppProps } from "next/app";
//Components
import Layout from "@/components/Layout";
//Styles
import "@/styles/globals.css";
import { LoginModal, RegisterModal } from "@/components/modals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
