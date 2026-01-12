import { prisma } from "@/prisma/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export type UserResponse = {
    id: string,
    email: string,
    favorites: {
        title: string;
        imageUrl: string;
        filePath: string;
        authorId: number;
        genreId: number;
        categoryId: number;
    }[]
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email"},
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials): Promise<UserResponse | null> {
                if (credentials) {
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email }
                    });
                    console.log('Поиск пользователя:', user);

                    if (user) {
                        const isPasswordValid = bcrypt.compareSync(credentials.password, user.password);
                        console.log('Проверка пароля для пользователя:', user.email, 'Результат:', isPasswordValid);

                        const favorites = await prisma.media.findMany({
                            where: {
                                favorites: {
                                    some: {
                                        favoriteId: user.id,
                                    }
                                }
                            }
                        })

                        if (isPasswordValid) {
                            return {
                                id: user.id.toString(),
                                email: user.email,
                                favorites,
                            };
                        } else {
                            console.log('Неверный пароль для email:', credentials.email);
                            return null;
                        }
                    } else {
                        console.log('Пользователь не найден с email:', credentials.email);
                        return null;
                    }
                } return null
        }})
    ],
    callbacks: {
        async jwt({token, user}){
            if (user) {
                token.id = user.id;
                token.email = user.email
                token.favorites = user.favorites;
            }
            return token;
        },
        async session({session, token}) {
            session.user.id = token.id as string;
            session.user.email = token.email as string;
            session.user.favorites = token.favorites as UserResponse['favorites'];
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET || "temporary-secret-for-dev",
    session: {
        strategy: 'jwt',
    }
}