import db from "@/lib/prisma";

export async function GET() {
  const categories = await db.category.findMany({
    include: {
      CategorySpecificationTemplate: true,
      _count: {
        select: {
          products: true
        }
      }
    }
  });
  
  // Transform the response to make it cleaner (optional)
  const formattedCategories = categories.map(category => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    updatedAt: category.updatedAt,
    createdAt: category.createdAt,
    productCount: category._count.products,
    specifications: category.CategorySpecificationTemplate
  }));
  
  return Response.json(formattedCategories);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, specificationKeys = [] } = body;

  // Create the category and its specification templates in a single transaction
  const category = await db.category.create({
    data: {
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
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