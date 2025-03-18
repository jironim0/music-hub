import { prisma } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id'); // Получаем id из query-строки
  console.log('Запрос получен', id);

  if (!id) {
    return NextResponse.json({ message: "ID не указан" }, { status: 400 });
  }

  try {
    const data = await prisma.media.findMany({
        where: {
            favorites: {
                some: {
                    favoriteId: parseInt(id),
                }
            }
        }
    })

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Ошибка при получении данных:', error);
    return NextResponse.json({ message: "Неизвестная ошибка..." }, { status: 500 });
  }
}