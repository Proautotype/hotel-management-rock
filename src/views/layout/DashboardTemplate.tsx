import AppSidebar from "@/components/custome/AppSidebar"
import { ModeToggle } from "@/components/mode-toggler"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"
import dayjs from "dayjs"
import { Outlet, useNavigate } from "react-router"

const DashboardTemplate = () => {

  const navigate = useNavigate()

  function handlePathChange(path?: string) {
    path && navigate(path)
  }


  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar handlePathChange={handlePathChange} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <div className="flex items-center">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div >
             <span className="mr-2">Date ({(dayjs().format('dddd, DD MMMM YYYY'))} )</span>
             <ModeToggle />
          </div>
         
        </header>
        <main>
          <Outlet/>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardTemplate

/**
 <SidebarInset>
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarInset>
 * */ 