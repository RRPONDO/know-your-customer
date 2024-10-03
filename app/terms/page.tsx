import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import React from "react";

const TermsPage = () => {
  return (
    <div className="w-[100%]">
      <Card className="max-w-[50%] ml-[25%] mt-2">
        <CardHeader className="flex gap-3">
          <div className="place-items-center ml-[35%]">
            <p className="text-md ">Our Compliance Declaration </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="gap-2 font-sans">
          <p>
            I certify that to the best of my knowledge that the information
            supplied above is true and correct and I represent and warrant that
            I am duly authorised to disclose this information, including but not
            limited to any personal data and that such disclosure does not
            breach any applicable laws and regulations including but not limited
            to applicable data protection laws or state secrecy laws. I
            understand that if any of the information given is knowingly false
            or if I knowingly fail to disclose relevant information, this may
            constitute grounds for termination of the engagement to provide
            goods and/or services to Zuva Petroleum
          </p>

          <p>
            I certify that I will promptly notify Zuva Petroleum in writing of
            any change in the corporate structure, beneficial owners and/or
            directors of the organisation and provide Zuva Petroleum with any
            information necessary to enable Zuva Petroleum to verify such
            changes.
          </p>
          <p>
            Zuva Petroleum (or one of its subsidiaries or affiliates) will
            collect the personal information of your directors, officers and
            employees (collectively, you or your) when you enter into a
            commercial relationship with us. Zuva Petroleum will use personal
            information to verify the identity of your directors, officers and
            employees and assess your company information to determine whether
            we will enter a commercial relationship with you. We may share your
            personal information with authorised third parties such as our
            technology providers, agents, consultants, and service providers
            such as accountants, lawyers and auditors. Zuva Petroleum is
            committed to protecting your privacy and will deal with your
            personal information in accordance with our Privacy Policy.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://www.zuvapetroleum.co.zw/"
          >
            Visit our Website.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TermsPage;
