import { SignUp } from "@clerk/nextjs";
import { Body } from "~/components/Body";

const SignInPage = () => {
  return (
    <Body>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </Body>
  );
};

export default SignInPage;
