'use client';

import { useProductsData } from "@/hooks/useProductsData";
import { DataTable } from "@/components/ui/data-table";
import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/types/products.types";
import { ProductStatusBadge } from "./ProductStatusBadge";
import { ProductActionButtons } from "./ProductActionButtons";
import { ProductsFilters } from "./ProductsFilters";

export function ProductsTable() {
  const {
    products,
    loading,
    filters,
    updateFilters,
    categoryOptions,
    statusOptions
  } = useProductsData();

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
      cell: ({ row }) => <ProductStatusBadge status={row.getValue("status")} />,
    },
    {
      id: "actions",
      header: "ACTIONS",
      cell: ({ row }) => <ProductActionButtons product={row.original} />,
    },
  ];

  return (
    <div className="space-y-4 w-full">
      <ProductsFilters 
        filters={filters}
        onFilterChange={updateFilters}
        categoryOptions={categoryOptions}
        statusOptions={statusOptions}
      />
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <DataTable columns={columns} data={products} />
      )}
    </div>
  );
}