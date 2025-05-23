import { ProductsTable } from "@/components/Admin/Products/ProductsTable";

export default function ProductsPage() {
  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
      </div>
      <ProductsTable />
    </div>
  );
}