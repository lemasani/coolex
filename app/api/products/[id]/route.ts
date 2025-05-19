import db from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const product = await db.product.findUnique({
        where: { id: params.id },
        include: { images: true, specifications: true, category: true },
    });
    if (!product) return new Response("Not found", { status: 404 });
    return Response.json(product);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const { title, description, price, location, contactNumber, categoryId, images, specifications } = body;

  const contactLink = `https://wa.me/${contactNumber}?text=I'm%20interested%20in%20${encodeURIComponent(title)}`;

  const product = await db.product.update({
    where: { id: params.id },
    data: {
      title,
      description,
      price,
      location,
      contactLink,
      categoryId,
      images: { deleteMany: {}, create: images.map((url: string) => ({ url })) },
      specifications: { deleteMany: {}, create: specifications.map((spec: { key: string, value: string }) => spec) },
    }
  });

  return Response.json(product);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await db.product.delete({ where: { id: params.id } });
  return new Response("Deleted", { status: 204 });
}