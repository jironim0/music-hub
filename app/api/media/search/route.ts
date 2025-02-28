import { prisma } from "@/prisma/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || ''

    const items = await prisma.media.findMany({
        where: {
            title: {
                contains: query,
                mode: 'insensitive',
            }
        },
        take: 5,
    })

    return NextResponse.json(items)
}