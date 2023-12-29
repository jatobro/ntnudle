import { SignUp as ClerkSignUp } from "@clerk/nextjs";

export const SignUp = () => {
  return (
    <div className="flex items-center">
      <ClerkSignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUp;
