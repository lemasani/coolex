import db from "@/lib/prisma";

export async function GET() {
  const categories = await db.category.findMany();
  return Response.json(categories);
}
export async function POST(req: Request) {
  const body = await req.json();
  const { name } = body;

  const category = await db.category.create({
    data: {
      name,
    },
  });

  return Response.json(category);
}