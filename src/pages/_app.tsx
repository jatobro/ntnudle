import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import { Layout } from "~/components/layout";
import { ThemeProvider } from "~/components/providers/theme-provider";

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
