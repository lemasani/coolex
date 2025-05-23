'use client';

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SelectComponent } from "@/components/shared/Select";

type Product = {
  id: string;
  title: string;
  price: number;
  status: "AVAILABLE" | "SOLD_OUT";
  createdAt: string;
  category: {
    id: string;
    name: string;
  };
};

export function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = "/api/products";
        const params = new URLSearchParams();
        
        if (searchQuery) params.append("search", searchQuery);
        if (selectedCategory) params.append("category", selectedCategory);
        
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
  }, [searchQuery, selectedCategory, selectedStatus]);

  // Filter products by status if selected
  const filteredProducts = selectedStatus 
    ? products.filter(product => 
        selectedStatus === "AVAILABLE" ? product.status === "AVAILABLE" : product.status === "SOLD_OUT")
    : products;

  // Format category options for SelectComponent
  const categoryOptions = [
    { label: "All Categories", value: "all" },
    ...categories.map(category => ({
      label: category.name,
      value: category.id
    }))
  ];

  // Format status options for SelectComponent
  const statusOptions = [
    { label: "All Status", value: "all" },
    { label: "Available", value: "AVAILABLE" },
    { label: "Sold", value: "SOLD_OUT" }
  ];

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "title",
      header: "TITLE",
    },
    {
      accessorKey: "category.name",
      header: "CATEGORY",
    },
    {
      accessorKey: "price",
      header: "PRICE",
      cell: ({ row }) => {
        const price = parseFloat(row.getValue("price"));
        return <div>${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>;
      },
    },
    {
      accessorKey: "createdAt",
      header: "CREATED DATE",
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"));
        return format(date, "MMM d, yyyy");
      },
    },
    {
      accessorKey: "status",
      header: "STATUS",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge variant={status === "AVAILABLE" ? "success" : "destructive"}>
            {status === "AVAILABLE" ? "Available" : "Sold"}
          </Badge>
        );
      },
    },
    {
      id: "actions",
      header: "ACTIONS",
      cell: ({ row }) => {
        const product = row.original;
        return (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/products/${product.id}`}>
                <Eye className="h-4 w-4 mr-1" />
                View
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/admin/products/${product.id}/edit`}>
                <Pencil className="h-4 w-4 mr-1" />
                Edit
              </Link>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="space-y-4 w-full">
      <div className="flex gap-4 flex-col sm:flex-row">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sm:max-w-xs"
        />

        <div className="w-full lg:w-1/4">
          <SelectComponent
            options={categoryOptions}
            value={selectedCategory === "" ? "all" : selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value === "all" ? "" : value);
            }}
            placeholder="All Categories"
            className="w-full"
          />
        </div>
        
        <div  className="w-full lg:w-1/4">
          <SelectComponent
            options={statusOptions}
            value={selectedStatus === "" ? "all" : selectedStatus}
            onValueChange={(value) => {
              setSelectedStatus(value === "all" ? "" : value);
            }}
            placeholder="All Status"
            className="w-full"
          />
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <DataTable columns={columns} data={filteredProducts} />
      )}
    </div>
  );
}