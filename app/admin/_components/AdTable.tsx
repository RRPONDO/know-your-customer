"use client";
import { EyeIcon } from "@heroicons/react/16/solid";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { Prisma, Application } from "@prisma/client";
import Link from "next/link";
//import UpdateForm from "./UpdateForm";

type Props = {
  applications: Prisma.ApplicationGetPayload<{
    include: {
      files: true;
      user: true;
    };
  }>[];
};

const AdTable = ({ applications }: Props) => {
  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Reg Name</TableColumn>
          <TableColumn>Counterparty</TableColumn>
          <TableColumn>Entity Type</TableColumn>
          <TableColumn>Date Created</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {applications.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.regName}</TableCell>
              <TableCell>{item.counterparty}</TableCell>
              <TableCell>{item.entityType}</TableCell>
              <TableCell>{item.user.createdAt.toString()}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <div className="flex">
                  <Tooltip content="Details">
                    <Link href={`/admin/adone/${item.id}/update`}>
                      <EyeIcon className="w-5" />
                    </Link>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdTable;
