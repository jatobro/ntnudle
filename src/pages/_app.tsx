import { ClerkProvider } from "@clerk/nextjs";

import { type AppType } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "~/components/theme-provider";

import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider
        {...pageProps}
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Head>
          <title>NTNUdle</title>
          <meta name="description" content="NTNU guessing game" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
