// Next imports
import type { AppProps } from "next/app";
// Next Auth
import { SessionProvider } from "next-auth/react";
//Components
import Layout from "@/components/Layout";
import { EditModal, LoginModal, RegisterModal } from "@/components/modals";
// Other imports
import { Toaster } from "react-hot-toast";
//Styles
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
