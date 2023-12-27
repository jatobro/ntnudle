import { SignIn } from "@clerk/nextjs";
import { Layout } from "~/components/layout";

const SignInPage = () => {
  return (
    <Layout>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </Layout>
  );
};

export default SignInPage;
