// import prisma from "@/lib/prisma";
// import { User } from "@prisma/client";
// import { NextRequest, NextResponse } from "next/server";
// import {z} from "zod"
// import bcrypt from 'bcrypt'
// import { error } from "console";

// const schema = z.object({
//     email:z.string().email(),
//     password: z.string().min(5)
// })

// export async function POST(request:NextRequest){
//     const body = await request.json();

//     const validation = schema.safeParse(body);
//     if(!validation.success)
//         return NextResponse.json(validation.error.errors, {status: 400,});

//     const user = await prisma.user.findUnique({
//         where:{email:body.email}
//     });

//     if (user) return NextResponse.json({error:"User already exists"},{status:400});

//     const password = bcrypt.hash(body.password, 10);

//     const newUser = prisma.user.create({
//         data:{
//             email: body.email,
//             password
//         }
//     });

//     return NextResponse.json({email:newUser.email});
// }