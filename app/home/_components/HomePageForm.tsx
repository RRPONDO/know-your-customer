import prisma from "@/lib/prisma";
//import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Link,
  Image,
  TableBody,
  TableCell,
  Table,
  TableRow,
  TableHeader,
} from "@nextui-org/react";
import { FileText, SquareCheckBig } from "lucide-react";
import React from "react";
import { notFound, redirect } from "next/navigation";
//import { useRouter } from "next/navigation";

const HomePageForm = async () => {
  const session = await getServerSession(authOptions);

  const user = session?.user?.email;
  // if (!user) return notFound();

  if (session!.user?.email == "ronaldp@zuvapetroleum.co.zw") {
    //router.push("/admin/adone");
    redirect("/admin/adone");
  }

  if (session!.user?.email == "munyac@zuvapetroleum.co.zw") {
    //router.push("/admin/adone");
    redirect("/admin/adtwo");
  }

  const application = await prisma.application.findUnique({
    where: {
      userId: user || "1",
    },
    include: {
      files: true,
    },
  });
  const icon = <SquareCheckBig />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border border-green-400 gap-2 p-2">
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-xl font-bold">Application Status</p>
              <p className="text-sm text-default-500">
                Check status of your application & any comments below:
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex place-content-between text-sm p-3">
              <div>Status:</div>
              <div>
                {application?.status === "Approved"
                  ? icon
                  : application?.status}
              </div>
            </div>
            <Divider />
            <div className="flex place-content-between text-sm p-3">
              <div>Comment:</div>
              <div>{application?.comment}</div>
            </div>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
      </div>
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-xl font-bold">
                {application?.counterparty} Information
              </p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul className="flex flex-col gap-2">
              <li className="shadow-md p-2" key="1">
                <span className="flex place-content-between">
                  <span>Registration Name:</span>
                  {application?.regName}
                </span>
              </li>
              <li className="shadow-md p-2" key="2">
                <span className="flex place-content-between">
                  <span>Entity Type:</span>
                  {application?.entityType}
                </span>
              </li>
              <li className="shadow-md p-2" key="3">
                <span className="flex place-content-between">
                  <span>Registration ID:</span>
                  {application?.regId}
                </span>
              </li>
              <li className="shadow-md p-2" key="4">
                <span className="flex place-content-between">
                  <span>Registered Country:</span>
                  {application?.regCountry}
                </span>
              </li>
              <li className="shadow-md p-2" key="5">
                <span className="flex place-content-between">
                  <span>Registered Address:</span>
                  {application?.regAddr}
                </span>
              </li>
              <li className="shadow-md p-2" key="6">
                <span className="flex place-content-between">
                  <span>Business Address:</span>
                  {application?.bsnsAddr}
                </span>
              </li>
              <li className="shadow-md p-2" key="7">
                <span className="flex place-content-between">
                  <span>Business Telephone:</span>
                  {application?.telephone}
                </span>
              </li>
              <li className="shadow-md p-2" key="8">
                <span className="flex place-content-between">
                  <span>Business Website:</span>
                  {application?.website}
                </span>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-xl font-bold">Bank Information</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul>
              <li className="shadow-md p-2" key="9">
                <span className="flex place-content-between">
                  <span>Bank Name:</span>
                  <span>{application?.bankName}</span>
                </span>
              </li>
              <li className="shadow-md p-2" key="10">
                <span className="flex place-content-between">
                  <span>Account number:</span>
                  {application?.accNum}
                </span>
              </li>
              <li className="shadow-md p-2" key="11">
                <span className="flex place-content-between">
                  <span>Bank Address:</span>
                  {application?.bankAddr}
                </span>
              </li>
              <li className="shadow-md p-2" key="12">
                <span className="flex place-content-between">
                  <span>Country:</span>
                  {application?.country}
                </span>
              </li>
              <li className="shadow-md p-2" key="13">
                <span className="flex place-content-between">
                  <span>Swift Code:</span>
                  {application?.swiftCode}
                </span>
              </li>
              <li className="shadow-md p-2" key="14">
                <span className="flex place-content-between">
                  <span>Iban:</span>
                  {application?.iban}
                </span>
              </li>
              <li className="shadow-md p-2" key="15">
                <span className="flex place-content-between">
                  <span>Account beneficiary:</span>
                  {application?.accBen}
                </span>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-xl font-bold">List of Documents</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex gap-2">
              {application?.files.map((i) => (
                <a target="_blank" href={i.url} key={i.id}>
                  <FileText />
                </a>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default HomePageForm;
