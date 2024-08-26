import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
      const { getUser } = await getKindeServerSession();
      const user = await getUser();
  
      if (user) { // Check if user exists before accessing properties
        const dbUser = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
        });
  
        if (!dbUser) {
          await prisma.user.create({
            data: {
              id: user.id,
              firstName: user.given_name ?? "",
              lastName: user.family_name ?? "",
              email: user.email ?? "",
              avatarUrl: user.picture ?? "",
            },
          });
        }
        return NextResponse.redirect("https://know-your-customer-seven.vercel.app/");
      } else {
        // Handle the case where user is null (e.g., redirect to login page)
        console.warn("User information not found from Kinde authentication.");
        // ... (redirect to login or display an error message)
      }
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
      console.error("Error occurred during authentication:", error);
      return NextResponse.json({ message: "An error occurred" }, { status: 500 });
      // Handle other potential errors during getKindeServerSession
      // ... (redirect to login or display an error message)
    }
  }