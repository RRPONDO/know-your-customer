import prisma from "@/lib/prisma";
import React from "react";
import ApprovedTableTwo from "../../_components/ApprovedTableTwo";

const ApprovedPage = async () => {
  const applicationPromise = prisma.application.findMany({
    where: {
      status: "Approved",
    },
    include: {
      files: true,
    },
  });
  const [applications] = await Promise.all([applicationPromise]);
  return (
    <div>
      <ApprovedTableTwo applications={applications} />
    </div>
  );
};

export default ApprovedPage;
