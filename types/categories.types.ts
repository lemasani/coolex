import z from "zod";

export type ProductCategory = {
    id: string;
    name: string;
    slug: string;
    specificationKeys: string[];
}


export type ProductCategoryDisplay = {
    id: string;
    name: string;
    slug: string;
    productCount: number;
    specificationKeys: string[];
}




// schema for creating a new category
export const createCategorySchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .refine(val => /^[A-Za-z0-9\s\-]+$/.test(val), {
      message: "Name can only contain letters, numbers, spaces, and hyphens"
    }),
  specificationKeys: z
    .array(z.string().min(1, "Specification key cannot be empty")),
});

export type CreateCategoryFormValues = z.infer<typeof createCategorySchema>;