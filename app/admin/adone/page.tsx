export const dynamic = "force-dynamic";
import prisma from "@/lib/prisma";
import React from "react";
import AdTable from "../_components/AdTable";

const AdminOnePage = async () => {
  const applicationPromise = prisma.application.findMany({
    where: {
      status: "Waiting for approval",
    },
    include: {
      files: true,
      user: true,
    },
  });
  const [applications] = await Promise.all([applicationPromise]);
  return (
    <div>
      <AdTable applications={applications} />
    </div>
  );
};

export default AdminOnePage;
