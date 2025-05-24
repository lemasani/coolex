import db from "@/lib/prisma";
import { createCategorySchema } from "@/types/categories.types";
import { NextResponse } from "next/server";

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
  try {
    const body = await req.json();
    
    // Validate request body
    const validation = createCategorySchema.safeParse(body);
    
    if (!validation.success) {
      return new NextResponse(
        JSON.stringify({ 
          message: 'Validation error', 
          errors: validation.error.format() 
        }),
        { status: 400 }
      );
    }
    
    const { name, specificationKeys } = validation.data;
    
    // Generate slug from name
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    // Check if category with same name or slug exists
    const existingCategory = await db.category.findFirst({
      where: {
        OR: [
          { name: { equals: name, mode: 'insensitive' } },
          { slug: { equals: slug, mode: 'insensitive' } }
        ]
      }
    });
    
    if (existingCategory) {
      return new NextResponse(
        JSON.stringify({ 
          message: 'A category with this name or URL already exists' 
        }),
        { status: 409 }
      );
    }
    
    // Create the category and specification templates in a transaction
    const category = await db.category.create({
      data: {
        name,
        slug,
        CategorySpecificationTemplate: {
          create: specificationKeys.map(key => ({ key }))
        }
      },
      include: {
        CategorySpecificationTemplate: true,
        _count: {
          select: {
            products: true
          }
        }
      }
    });
    
    // Transform for response
    const response = {
      id: category.id,
      name: category.name,
      slug: category.slug,
      productCount: category._count.products,
      specifications: category.CategorySpecificationTemplate,
      createdAt: category.createdAt
    };
    
    return NextResponse.json(response, { status: 201 });
    
  } catch (error) {
    console.error('Error creating category:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
}