-- First add the updatedAt column with a default value
ALTER TABLE "Category" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT NOW();

-- If slug column doesn't exist yet, add it as nullable initially
ALTER TABLE "Category" ADD COLUMN "slug" TEXT DEFAULT '';

-- Update existing rows to have unique slugs based on name
UPDATE "Category" SET "slug" = LOWER(REPLACE(name, ' ', '-'));

-- Now make slug unique after setting values
ALTER TABLE "Category" ADD CONSTRAINT "Category_slug_key" UNIQUE ("slug");