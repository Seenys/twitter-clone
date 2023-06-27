// Next Imports
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
// Components
import Header from "@/components/Header";
import NotificationsFeed from "@/components/notifications/NotificationsFeed";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

const Notifications = () => {
  return (
    <>
      <Header label="Notificaciones" showBackArrow />
      <NotificationsFeed />
    </>
  );
};

export default Notifications;
