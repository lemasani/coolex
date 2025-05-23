import { Product } from "@/types/products.types";
import { useState, useEffect } from "react";

type FilterOption = {
  label: string;
  value: string;
};

type Filters = {
  search: string;
  category: string;
  status: string;
};

export function useProductsData() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "",
    status: ""
  });

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = "/api/products";
        const params = new URLSearchParams();
        
        if (filters.search) params.append("search", filters.search);
        if (filters.category) params.append("category", filters.category);
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        
        // Extract unique categories
        const uniqueCats = [...new Set(data
          .filter((p: Product) => p.category)
          .map((p: Product) => ({ 
            id: p.category.id, 
            name: p.category.name 
          })))
        ];
        setCategories(uniqueCats);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [filters.search, filters.category]);

  // Filter products by status (client-side filtering)
  useEffect(() => {
    if (filters.status) {
      setFilteredProducts(products.filter(product => 
        filters.status === "AVAILABLE" ? product.status === "AVAILABLE" : product.status === "SOLD_OUT"));
    } else {
      setFilteredProducts(products);
    }
  }, [products, filters.status]);

  const updateFilters = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  // Format category options for SelectComponent
  const categoryOptions: FilterOption[] = [
    { label: "All Categories", value: "all" },
    ...categories.map(category => ({
      label: category.name,
      value: category.id
    }))
  ];

  // Format status options for SelectComponent
  const statusOptions: FilterOption[] = [
    { label: "All Status", value: "all" },
    { label: "Available", value: "AVAILABLE" },
    { label: "Sold", value: "SOLD_OUT" }
  ];

  return {
    products: filteredProducts,
    loading,
    filters,
    updateFilters,
    categoryOptions,
    statusOptions
  };
}