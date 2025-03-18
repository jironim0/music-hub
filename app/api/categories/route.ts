import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";


export async function GET (){
    const data = await prisma.category.findMany({
        include: {
            items: true
        }
    })

    return NextResponse.json(data)
}