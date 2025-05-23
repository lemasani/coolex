import db from "@/lib/prisma";

export async function GET() {
  const categories = await db.category.findMany({
    include: {
      CategorySpecificationTemplate: true 
    }
  });
  return Response.json(categories);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, specificationKeys = [] } = body;

  // Create the category and its specification templates in a single transaction
  const category = await db.category.create({
    data: {
      name,
      CategorySpecificationTemplate: {
        create: specificationKeys.map((key: string) => ({
          key,
        }))
      }
    },
    include: {
      CategorySpecificationTemplate: true
    }
  });

  return Response.json(category);
}