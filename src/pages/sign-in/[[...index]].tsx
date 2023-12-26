import { SignIn } from "@clerk/nextjs";

import { Body } from "~/components/Body";

const SignInPage = () => {
  return (
    <Body>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </Body>
  );
};

export default SignInPage;
