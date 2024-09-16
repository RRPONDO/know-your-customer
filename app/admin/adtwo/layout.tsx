import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const ApplicationLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="bg-success-400 flex justify-between items-center p-2">
        <div className="flex items-center gap-3 text-white">
          <Link href={"/admin/adtwo"}>
            <h2 className=" text-xl font-semibold px-2">Admin</h2>
          </Link>
          |<Link href={"/admin/adtwo/approved"}>Approved</Link>|
          <Link href={"/admin/adtwo/rejected"}>Rejected</Link>
        </div>
        <Button color="secondary">
          <Link href="#">Reports</Link>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default ApplicationLayout;
