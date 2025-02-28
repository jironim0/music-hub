import { prisma } from "@/prisma/db";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json(); // Получаем данные из запроса

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        console.log('User found!', existingUser);

        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        });

        return NextResponse.json({ message: 'User is registered' }, { status: 201 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ message: "Unknown error" }, { status: 500 });
        }
    }
}
