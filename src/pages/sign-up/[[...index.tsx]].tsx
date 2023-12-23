import { SignUp } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="bg-black min-h-screen">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </main>
  );
};

export default SignInPage;
