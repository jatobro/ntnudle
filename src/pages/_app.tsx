import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { DEFAULT } from "~/constants";

import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: DEFAULT }}>
      <ClerkProvider
        appearance={{
          variables: {
            fontFamily: DEFAULT,
          },
        }}
      >
        <div className="h-screen flex flex-col">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
