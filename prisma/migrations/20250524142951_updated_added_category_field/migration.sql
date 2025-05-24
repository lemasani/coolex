/*
  Warnings:

  - Made the column `slug` on table `Category` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "slug" DROP DEFAULT;
