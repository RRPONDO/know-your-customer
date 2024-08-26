import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
   const {getUser} = await getKindeServerSession();
   const user = await getUser();
   if (!user || user===null || !user.id) throw Error("Something went wrong "+ user);

   const dbUser = await prisma.user.findUnique({
    where:{
        id:user.id,
    }
   })

   if (!dbUser){
    await prisma.user.create({
        data:{
            id:user.id,
            firstName:user.given_name ?? "",
            lastName:user.family_name ?? "",
            email:user.email ?? "",
            avatarUrl:user.picture??""
        }
    })
    return NextResponse.redirect("https://know-your-customer-seven.vercel.app/")
   }
}