/*
  Warnings:

  - You are about to drop the column `favoriteId` on the `Media` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_favoriteId_fkey";

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "favoriteId";

-- CreateTable
CREATE TABLE "FavoriteMedia" (
    "favoriteId" INTEGER NOT NULL,
    "mediaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FavoriteMedia_pkey" PRIMARY KEY ("favoriteId","mediaId")
);

-- AddForeignKey
ALTER TABLE "FavoriteMedia" ADD CONSTRAINT "FavoriteMedia_favoriteId_fkey" FOREIGN KEY ("favoriteId") REFERENCES "Favorite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteMedia" ADD CONSTRAINT "FavoriteMedia_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
