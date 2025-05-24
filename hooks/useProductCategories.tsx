'use client'
import { ProductCategoryDisplay } from "@/types/categories.types";
import React from "react";


export function useProductCategories() {
  const [categories, setCategories] = React.useState<ProductCategoryDisplay[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data: ProductCategoryDisplay[] = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading, error };
}