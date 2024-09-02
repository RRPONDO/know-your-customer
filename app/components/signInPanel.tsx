import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";
import React from "react";

const SignInPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  const user = await getUser();

  if (await isAuthenticated())
    return (
      <div className="flex gap-2 place-items-center">
        {user?.given_name}{" "}
        <Button>
          <LogoutLink>Logout</LogoutLink>
        </Button>
      </div>
    );
  return (
    <div className="flex gap-2">
      <Button color="success">
        <LoginLink>Sign In</LoginLink>
      </Button>
      <Button color="success">
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};

export default SignInPanel;
