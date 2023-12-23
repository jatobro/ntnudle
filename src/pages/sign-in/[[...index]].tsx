import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="bg-black min-h-screen">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </main>
  );
};

export default SignInPage;
