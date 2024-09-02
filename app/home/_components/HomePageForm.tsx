import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
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
import { FileText } from "lucide-react";
import React from "react";

const HomePageForm = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  const application = await prisma.application.findUnique({
    where: {
      userId: user?.id,
    },
    include: {
      files: true,
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border border-green-400 gap-2 p-2">
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={"https://avatars.githubusercontent.com/u/86160567?s=200&v=4"}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Application Status</p>
              <p className="text-small text-default-500">
                If new, click application link below
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{application?.status}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link showAnchorIcon href={"/client/application"}>
              Application.
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{application?.counterparty} Information</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul>
              <li key="1">{application?.regName}</li>
              <li key="2">{application?.entityType}</li>
              <li key="3">{application?.regId}</li>
              <li key="4">{application?.regCountry}</li>
              <li key="5">{application?.regAddr}</li>
              <li key="6">{application?.bsnsAddr}</li>
              <li key="7">{application?.telephone}</li>
              <li key="8">{application?.website}</li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Bank Information</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul>
              <li key="9">{application?.bankName}</li>
              <li key="10">{application?.accNum}</li>
              <li key="11">{application?.bankAddr}</li>
              <li key="12">{application?.country}</li>
              <li key="13">{application?.swiftCode}</li>
              <li key="14">{application?.iban}</li>
              <li key="15">{application?.accBen}</li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">List of Documents</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex gap-2">
              {application?.files.map((i) => (
                <a target="_blank" href={i.url}>
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
