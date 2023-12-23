import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { Header } from "~/components/Header";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <ClerkProvider
        appearance={{
          variables: {
            fontFamily: "Courier New",
          },
        }}
      >
        <Header />
        <Component {...pageProps} />
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
