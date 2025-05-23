import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
}

export function ProductStatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge variant={status === "AVAILABLE" ? "success" : "destructive"}>
      {status === "AVAILABLE" ? "Available" : "Sold"}
    </Badge>
  );
}