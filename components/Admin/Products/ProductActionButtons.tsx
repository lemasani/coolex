import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, Pencil } from "lucide-react";
import { Product } from "@/types/products.types";

interface ActionButtonsProps {
  product: Product;
}

export function ProductActionButtons({ product }: ActionButtonsProps) {
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
}