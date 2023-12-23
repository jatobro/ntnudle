import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { Header } from "~/components/Header";
import "~/styles/globals.css";

import { dark } from "@clerk/themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <div className="font-mono text-black">
        <Header />
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
