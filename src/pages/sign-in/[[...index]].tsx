import { SignIn } from "@clerk/nextjs";

import { PageBody } from "~/components/PageBody";

const SignInPage = () => {
  return (
    <PageBody>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </PageBody>
  );
};

export default SignInPage;
