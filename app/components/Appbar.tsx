import { HomeModernIcon } from "@heroicons/react/16/solid";
import { Navbar, NavbarBrand, NavbarContent, Image } from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Appbar = ({ children }: Props) => {
  return (
    <Navbar className="shadow-lg bg-green-600">
      <NavbarBrand>
        <Link
          href={"/"}
          className="flex gap-2 text-success-400 hover:text-success-600 transition-colors"
        >
          {/* place-items-center <Image src="/logozuva.png" alt="logo" height={80} /> */}
          <p className="font-bold text-inherit text-2xl text-white">
            Zuva Online KYC
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">{children}</NavbarContent>
    </Navbar>
  );
};

export default Appbar;
