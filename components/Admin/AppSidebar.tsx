'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Package, Plus, ArrowLeft } from "lucide-react";


// Define routes for the admin sidebar
const adminRoutes = [
  {
    group: "General",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin",
      },
    ],
  },
  {
    group: "Products",
    items: [
      {
        label: "Products",
        icon: Package,
        href: "/admin/products",
      },
      {
        label: "Add Product",
        icon: Plus,
        href: "/admin/products/new",
      },
    ],
  },
  {
    group: "Categories",
    items: [
      {
        label: "Categories",
        icon: Package,
        href: "/admin/categories",
      },
      {
        label: "Add Category",
        icon: Plus,
        href: "/admin/categories/new",
      },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r min-h-screen">
      <SidebarHeader className="p-4 border-b">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </SidebarHeader>
      <SidebarContent>
        {adminRoutes.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.href}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4 border-t mt-auto">
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 w-full py-2 px-4 text-center border rounded-md hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}