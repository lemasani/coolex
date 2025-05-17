import { Car, Bike, UtensilsCrossed } from "lucide-react";

export const categories = [
  {
    id: "cars",
    name: "Cars",
    description: "Premium selection of imported vehicles from Japan, Dubai and Europe. Sedans, SUVs, trucks and more to match your needs.",
    icon: Car,
    imageUrl: "/images/categories/cars.jpg",
    badgeText: "Popular",
    path: "/products/cars"
  },
  {
    id: "bicycles",
    name: "Bicycles",
    description: "High-quality bicycles for all ages and purposes. Mountain bikes, road bikes, city bikes and children's bikes available.",
    icon: Bike,
    imageUrl: "/images/categories/bicycles.jpg",
    badgeText: "New Arrivals",
    path: "/products/bicycles"
  },
  {
    id: "home-equipment",
    name: "Home Equipment",
    description: "Essential kitchen utensils and home appliances for modern living. Cookware, cutlery, and kitchen gadgets from trusted brands.",
    icon: UtensilsCrossed,
    imageUrl: "/images/categories/home-equipment.jpg",
    badgeText: "Best Sellers",
    path: "/products/home-equipment"
  }
];
