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
        <h2 className="text-white text-xl font-semibold px-2">Application</h2>
        <Button color="secondary">
          <Link href="../home">Return to Home</Link>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default ApplicationLayout;
