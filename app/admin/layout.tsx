import { AdminSidebar } from "@/components/Admin/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 min-h-screen">
          <div className="flex items-center h-12 border-b px-4">
            <SidebarTrigger />
          </div>
          <div className="p-6 w-full bg-background min-h-[calc(100vh-3rem)]">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}