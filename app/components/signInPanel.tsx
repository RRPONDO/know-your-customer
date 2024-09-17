"use client";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { Button } from "@nextui-org/react";
import React from "react";
//import { getServerSession } from "next-auth";
import Link from "next/link";
import { useSession } from "next-auth/react";

const SignInPanel = () => {
  // const { isAuthenticated, getUser } = await getKindeServerSession();
  // const user = await getUser();
  const { status, data: session } = useSession();
  //const session = await getServerSession(authOptions);

  return (
    <>
      <div>
        {status === "authenticated" && (
          <div className="flex gap-2 text-white text-lg">
            <span className="">{session.user?.email}</span> |
            <Link className="" href="/api/auth/signout">
              Logout
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <div className="flex gap-2 text-white text-lg">
            <Button as={Link} href="/">
              Sign In
            </Button>
            <Button as={Link} href="/auth/signup">
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </>
  );

  // if (await isAuthenticated())
  //   return (
  //     <div className="flex gap-2 place-items-center">
  //       {user?.given_name}{" "}
  //       <Button>
  //         <LogoutLink>Logout</LogoutLink>
  //       </Button>
  //     </div>
  //   );
  // return (
  //   <div className="flex gap-2">
  //     <Button color="success">
  //       <LoginLink>Sign In</LoginLink>
  //     </Button>
  //     <Button color="success">
  //       <RegisterLink>Sign Up</RegisterLink>
  //     </Button>
  //   </div>
  // );
};

export default SignInPanel;
