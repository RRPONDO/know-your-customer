import prisma from "@/lib/prisma";
import React from "react";
import RejectedTableTwo from "../../_components/ApprovedTableTwo";

const RejectedPage = async () => {
  const applicationPromise = prisma.application.findMany({
    where: {
      status: "Rejected",
    },
    include: {
      files: true,
    },
  });
  const [applications] = await Promise.all([applicationPromise]);
  return (
    <div>
      <RejectedTableTwo applications={applications} />
    </div>
  );
};

export default RejectedPage;
