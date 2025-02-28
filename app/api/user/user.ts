import { prisma } from "@/prisma/db"
import { NextResponse } from "next/server"

export async function POST(){

    const users = await prisma.user.findMany()

    return NextResponse.json(users)
}