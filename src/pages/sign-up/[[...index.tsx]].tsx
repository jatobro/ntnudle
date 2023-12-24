import { SignUp } from "@clerk/nextjs";
import { PageBody } from "~/components/PageBody";

const SignInPage = () => {
  return (
    <PageBody>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </PageBody>
  );
};

export default SignInPage;
