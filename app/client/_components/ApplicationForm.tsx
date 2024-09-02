"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Info, SquarePlus } from "lucide-react";
import React, { useState } from "react";
import Applicationfiles from "./Applicationfiles";
import { z } from "zod";
import { AddApplicationFormSchema } from "@/lib/zodSchema";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadFile } from "@/lib/upload";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { savApplication } from "@/lib/actions/application";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export type AddApplicationInputType = z.infer<typeof AddApplicationFormSchema>;
const ApplicationForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AddApplicationInputType>({
    resolver: zodResolver(AddApplicationFormSchema),
  });

  const onSubmit: SubmitHandler<AddApplicationInputType> = async (data) => {
    console.log({ data });
    const fileUrls = await uploadFile(images);
    console.log({ fileUrls });

    try {
      await savApplication(data, fileUrls, user?.id!);
      toast.success("Application submitted");
      router.push("/home");
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, (errors) => console.log({ errors }))}
      >
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2 gap-2 p-2">
            <Select
              errorMessage={errors.counterparty?.message}
              isInvalid={!!errors.counterparty}
              {...register("counterparty")}
              label="Counterparty"
              placeholder="Select Counterparty"
              className="col-span-2"
            >
              <SelectItem key="Supplier">Supplier</SelectItem>
              <SelectItem key="Customer">Customer</SelectItem>
            </Select>

            <Select
              errorMessage={errors.entityType?.message}
              isInvalid={!!errors.entityType}
              {...register("entityType")}
              label="Entity Type"
              placeholder="Select Entity Type"
              selectionMode="single"
              className="col-span-2"
            >
              <SelectItem
                key="Private Limited Company"
                value="Private Limited Company"
              >
                Private Limited Company
              </SelectItem>
              <SelectItem
                key="Public Limited Company"
                value="Public Limited Company"
              >
                Public Limited Company
              </SelectItem>
              <SelectItem key="Partnership" value="Partnership">
                Partnership
              </SelectItem>

              <SelectItem key="Parastatal" value="Parastatal">
                Parastatal
              </SelectItem>

              <SelectItem key="Individual" value="Individual">
                Individual
              </SelectItem>
            </Select>

            <Input
              errorMessage={errors.regName?.message}
              isInvalid={!!errors.regName}
              {...register("regName")}
              type="text"
              label="Registration Name"
              className="col-span-1"
            />
            <Input
              errorMessage={errors.regId?.message}
              isInvalid={!!errors.regId}
              {...register("regId")}
              type="text"
              label="Registration Id"
              className="col-span-1"
            />
            <Input
              errorMessage={errors.regCountry?.message}
              isInvalid={!!errors.regCountry}
              {...register("regCountry")}
              type="text"
              label="Registration Country"
              className="col-span-1"
            />
            <Input
              errorMessage={errors.regAddr?.message}
              isInvalid={!!errors.regAddr}
              {...register("regAddr")}
              type="text"
              label="Registration Address"
              className="col-span-1"
            />
            <Input
              errorMessage={errors.bsnsAddr?.message}
              isInvalid={!!errors.bsnsAddr}
              {...register("bsnsAddr")}
              type="text"
              label="Business Address"
              className="col-span-1"
            />
            <Input
              errorMessage={errors.telephone?.message}
              isInvalid={!!errors.telephone}
              {...register("telephone")}
              type="text"
              label="Telephone"
              className="col-span-1"
            />
            <Input
              errorMessage={errors.website?.message}
              isInvalid={!!errors.website}
              {...register("website")}
              type="text"
              label="Website"
              className="col-span-2"
            />
          </div>

          <div>
            <div className="p-2 grid gap-2">
              <Input
                errorMessage={errors.bankName?.message}
                isInvalid={!!errors.bankName}
                {...register("bankName")}
                type="text"
                label="Bank Name"
                className="col-span-1"
              />
              <Input
                errorMessage={errors.bankAddr?.message}
                isInvalid={!!errors.bankAddr}
                {...register("bankAddr")}
                type="text"
                label="Bank Address"
                className="col-span-1"
              />
              <Input
                errorMessage={errors.country?.message}
                isInvalid={!!errors.country}
                {...register("country")}
                type="text"
                label="Country"
                className="col-span-1"
              />
              <Input
                errorMessage={errors.accNum?.message}
                isInvalid={!!errors.accNum}
                {...register("accNum")}
                type="text"
                label="Account Name"
                className="col-span-1"
              />
              <Input
                errorMessage={errors.swiftCode?.message}
                isInvalid={!!errors.swiftCode}
                {...register("swiftCode")}
                type="text"
                label="Swift Code"
                className="col-span-1"
              />
              <Input
                errorMessage={errors.iban?.message}
                isInvalid={!!errors.iban}
                {...register("iban")}
                type="text"
                label="Iban"
                className="col-span-1"
              />
              <Input
                errorMessage={errors.accBen?.message}
                isInvalid={!!errors.accBen}
                {...register("accBen")}
                type="text"
                label="Account Beneficiary"
                className="col-span-2"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 ">
          <div className="flex flex-col ml-4">
            <p className="text-sm text-red-600 mt-5">
              **Combine all organisation files into a single document or upload
              them separately*
            </p>

            <a target="_blank" href="/terms">
              <div className="flex ml-11 mt-3 mb-3 text-xs text-blue-400 place-items-center gap-2">
                <Info />
                Check Required Documents for each entity type:
              </div>
            </a>

            <Applicationfiles images={images} setImages={setImages} />
          </div>
        </div>

        <div>
          <div className="rounded-box py-4 px-2 place-items-center">
            <Button
              type="submit"
              className="bg-success"
              // disabled={isSubmitting}
              // isLoading={isSubmitting}
            >
              <SquarePlus />
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
