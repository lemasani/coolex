import db from "@/lib/prisma";



export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const filters: any = {};
  if (category) filters.category = { name: category };
  if (search) filters.title = { contains: search, mode: "insensitive" };
  if (minPrice || maxPrice) filters.price = {
    ...(minPrice ? { gte: minPrice ? parseFloat(minPrice) : undefined } : {}),
    ...(maxPrice ? { lte: maxPrice ? parseFloat(maxPrice) : undefined } : {})
  };

  const products = await db.product.findMany({
    where: filters,
    include: { images: true, specifications: true, category: true },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, description, price, location, contactNumber, categoryId, images, specifications } = body;

  const contactLink = `https://wa.me/${contactNumber}?text=I'm%20interested%20in%20${encodeURIComponent(title)}`;

  const product = await db.product.create({
    data: {
      title,
      description,
      price,
      location,
      contactLink,
      categoryId,
      images: {
        create: images.map((url: string) => ({ url }))
      },
      specifications: {
        create: specifications.map((spec: { key: string, value: string }) => spec)
      }
    }
  });

  return Response.json(product);
}