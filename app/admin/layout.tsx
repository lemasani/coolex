import { AdminSidebar } from "@/components/Admin/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className="flex items-center h-12 border-b px-4 shrink-0">
            <SidebarTrigger />
          </div>
          <div className="flex-1 overflow-auto">
            <div className="p-6 w-full min-h-[calc(100vh-3rem)]">
              {children}
            </div>
          </div>
        </div>
      </div>
       <Toaster />
    </SidebarProvider>
  )
}