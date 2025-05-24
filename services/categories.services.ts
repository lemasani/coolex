import { CreateCategoryFormValues } from "@/types/categories.types";

export async function createCategory(data: CreateCategoryFormValues) {
  try {
    const response = await fetch('/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to create category');
    }
    
    return result;
  } catch (error) {
    // Re-throw the error to be handled by the caller
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unknown error occurred');
  }
}

export async function getCategories() {
  const response = await fetch('/api/categories');
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch categories');
  }
  
  return response.json();
}