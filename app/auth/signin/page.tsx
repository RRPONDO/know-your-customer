import SigninForm from "@/app/components/SigninForm";
import Link from "next/link";
import React from "react";

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <SigninForm />
      <Link href={"/auth/forgotPassword"}>Forgot Your Password</Link>
    </div>
  );
};

export default SigninPage;
