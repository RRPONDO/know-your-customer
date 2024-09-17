import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const ApplicationLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="bg-slate-100 flex justify-between items-center p-2">
        <div className="flex items-center gap-3">
          <Link href={"/admin/adtwo"}>
            <h2 className=" text-xl font-semibold px-2 text-green-600">
              Admin
            </h2>
          </Link>
          |
          <Link className="text-green-600" href={"/admin/adtwo/approved"}>
            Approved
          </Link>
          |
          <Link className="text-green-600" href={"/admin/adtwo/rejected"}>
            Rejected
          </Link>
        </div>
        <Button color="success" className="text-white">
          <Link href="#">Reports</Link>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default ApplicationLayout;
