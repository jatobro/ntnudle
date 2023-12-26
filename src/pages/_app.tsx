import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { Layout } from "~/components/Layout";

import "~/styles/globals.css";
import { api } from "~/utils/api";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          fontFamily: "Courier New, Courier, monospace",
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
