-- CreateTable
CREATE TABLE "CategorySpecificationTemplate" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "CategorySpecificationTemplate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategorySpecificationTemplate" ADD CONSTRAINT "CategorySpecificationTemplate_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
