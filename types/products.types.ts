export type Product = {
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