import { prisma } from "@/prisma/db"
import { NextResponse } from "next/server";


export async function POST (req: Request){
    const {userId, mediaId} = await req.json()
    console.log('Уникальный идентификатор пользователя:', userId, 'Уникальный идентификатор аудио-дорожки:', mediaId)

    try {
        const existFavorite = await prisma.favoriteMedia.findFirst({
            where: {
                favoriteId: parseInt(userId),
                mediaId: parseInt(mediaId),
            }
        })
        console.log('error number 1', existFavorite)
        if(existFavorite){
            return NextResponse.json({ message: "Этот трек уже добавлен в избранное, пожалуйста выберите другой" }, { status: 409 });
        }

        await prisma.favoriteMedia.create({
            data: {
                favoriteId: parseInt(userId),
                mediaId: parseInt(mediaId)
            }
        })

        return NextResponse.json({message: 'Отлично, все работает!'}, {status: 200})
    } catch (error) {
        console.log('EEE:',error)
        return NextResponse.json({ message: "Неизвестаня ошибка..." }, { status: 500 });
    }
}