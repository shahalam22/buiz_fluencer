/*
  Warnings:

  - You are about to drop the column `avatar` on the `Influencer` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Influencer` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Influencer` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Influencer` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `Influencer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Influencer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Influencer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT,
    "catSlug" TEXT NOT NULL,
    "businessEmail" TEXT NOT NULL,
    "influencerEmail" TEXT,
    CONSTRAINT "Post_catSlug_fkey" FOREIGN KEY ("catSlug") REFERENCES "Category" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_businessEmail_fkey" FOREIGN KEY ("businessEmail") REFERENCES "Business" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_businessEmail_fkey" FOREIGN KEY ("businessEmail") REFERENCES "Influencer" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Influencer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "handle" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Influencer" ("email", "handle", "id") SELECT "email", "handle", "id" FROM "Influencer";
DROP TABLE "Influencer";
ALTER TABLE "new_Influencer" RENAME TO "Influencer";
CREATE UNIQUE INDEX "Influencer_email_key" ON "Influencer"("email");
CREATE UNIQUE INDEX "Influencer_handle_key" ON "Influencer"("handle");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Business_email_key" ON "Business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");
