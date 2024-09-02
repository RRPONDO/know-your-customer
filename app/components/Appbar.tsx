import { HomeModernIcon } from "@heroicons/react/16/solid";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Appbar = ({ children }: Props) => {
  return (
    <Navbar className="shadow-md">
      <NavbarBrand>
        <Link
          href={"/"}
          className="flex place-items-center gap-2 text-success-400 hover:text-success-600 transition-colors"
        >
          <HomeModernIcon className="w-16" />
          <p className="font-bold text-inherit">KYC</p>
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
