import "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        email: string;
        favorites?: any; // Добавляем свойство favorites
    }

    interface Session {
        user: {
            id: string;
            email: string;
            favorites?: any; // Добавляем свойство favorites
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        email: string;
        favorites?: any; // Добавляем свойство favorites
    }
}