import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
import React from "react";

const HomePageForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border border-green-400 gap-2 p-2">
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
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
            <p>Pending application.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Application.
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Customer / Supplier Information</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>List of customer or supplier information</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Bank Information</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>List of banking information</p>
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
            <p>Customer or supplier document information</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default HomePageForm;
