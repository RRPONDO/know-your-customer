"use client";
import { UpdateApplicationFormSchema } from "@/lib/zodSchema";
import prisma from "@/lib/prisma";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Application, Prisma } from "@prisma/client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { AddApplicationFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updtApplication } from "@/lib/actions/application";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export type UpdateApplicationInputType = z.infer<
  typeof UpdateApplicationFormSchema
>;
const UpdateTableFormTwo = ({ id }: { id: string }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UpdateApplicationInputType>({
    resolver: zodResolver(UpdateApplicationFormSchema),
  });
  const onSubmit: SubmitHandler<UpdateApplicationInputType> = async (data) => {
    console.log({ id });
    try {
      await updtApplication(id, data);
      toast.success("Application submitted");
      router.push("/admin/adtwo");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, (errors) => console.log({ errors }))}
      >
        <div className="">
          <div className="flex flex-col gap-2 bg-green-500 p-4">
            <Select
              errorMessage={errors.status?.message}
              isInvalid={!!errors.status}
              {...register("status")}
              label="Select an option"
              className="max-w-xs"
            >
              <SelectItem key="Approved">Approve</SelectItem>
              <SelectItem key="Rejected">Reject</SelectItem>
            </Select>
            <Input
              errorMessage={errors.comment?.message}
              isInvalid={!!errors.comment}
              {...register("comment")}
              type="text"
              label="Comment"
              className=""
            />
            <Button type="submit" color="primary">
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateTableFormTwo;
