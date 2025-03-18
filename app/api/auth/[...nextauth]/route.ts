import { prisma } from "@/prisma/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import  bcrypt from 'bcrypt'


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email"},
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req): Promise<any> {
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
                }
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
        async session({session, token, user}) {
            session.user.id = token.id,
            session.user.email = token.email,
            session.user.favorites = token.favorites
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }