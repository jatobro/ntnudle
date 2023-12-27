import { SignUp } from "@clerk/nextjs";
import { Layout } from "~/components/layout";

const SignInPage = () => {
  return (
    <Layout>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </Layout>
  );
};

export default SignInPage;
