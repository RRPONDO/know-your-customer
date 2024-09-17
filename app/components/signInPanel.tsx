import { authOptions } from "../api/auth/[...nextauth]/options";
import { Button } from "@nextui-org/react";
import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";

const SignInPanel = async () => {
  // const { isAuthenticated, getUser } = await getKindeServerSession();
  // const user = await getUser();
  const session = await getServerSession(authOptions);

  return (
    <>
      <div>
        {session && session.user ? (
          <span className="text-white">
            {session.user?.email} |{" "}
            <Link
              className="text-sky-500 hover:text-sky-600 transition-colors"
              href={"/api/auth/signout"}
            >
              Sign Out
            </Link>
          </span>
        ) : (
          <span className="flex gap-2">
            {/* <Button as={Link} href={"/"}>
              Sign In
            </Button>

            <Button as={Link} href={"/auth/signup"}>
              Sign Up
            </Button> */}
          </span>
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
