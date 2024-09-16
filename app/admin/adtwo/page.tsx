import prisma from "@/lib/prisma";
import React from "react";
import AdTableTwo from "../_components/AdTableTwo";

const AdminTwoPage = async () => {
  const applicationPromise = prisma.application.findMany({
    where: {
      status: "Pending Final Approval",
    },
    include: {
      files: true,
    },
  });
  const [applications] = await Promise.all([applicationPromise]);
  return (
    <div>
      <AdTableTwo applications={applications} />
    </div>
  );
};

export default AdminTwoPage;
