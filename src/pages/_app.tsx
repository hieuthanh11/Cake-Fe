import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import { ReactQuery } from "@/config/react-query";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ReactQuery>
        <Component {...pageProps} />
      </ReactQuery>
    </SessionProvider>
  );
};

export default MyApp;
