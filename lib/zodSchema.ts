import {z} from "zod"
export const AddApplicationFormSchema = z.object({
  counterparty: z.string().min(1, "Please select counterparty"),
  entityType: z.string().min(1, "Please select entity type"),

  regName: z.string().min(1, "Please Enter The Reg Number"),
  regId: z.string().min(1, "Please Enter The Name"),
  // regDate: z.string().date(),
  regCountry: z.string().min(1, "Please Enter Regstered Country"),
  regAddr: z.string().min(1, "Please Enter the Registered address"),
  bsnsAddr: z.string().min(1, "Please Enter business address"),
  telephone: z.string().min(1, "Please Enter the telephone"),
  website: z.string().min(1, "Please Enter the website"),

  bankName: z.string().min(1, "Please Enter the bank name"),
  bankAddr: z.string().min(1, "Please Enter the bank address"),
  country: z.string().min(1, "Please Enter country"),
  accNum: z.string().min(1, "Please Enter account number"),
  swiftCode: z.string().min(1, "Please Enter swift code"),
  iban: z.string().min(1, "Please Enter iban"),
  accBen: z.string().min(1, "Please Enter the account beneficiary"),
})