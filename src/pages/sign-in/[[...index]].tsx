import { SignIn as ClerkSignIn } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <div className="flex items-center">
      <ClerkSignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignIn;
