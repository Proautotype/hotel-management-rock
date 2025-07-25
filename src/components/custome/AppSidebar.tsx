
import { ChevronUp, Cpu, User2, DoorOpen, type LucideProps, Book, Calendar1, FileCogIcon, Users, Vibrate, FolderTree, CreditCard, Percent, BookCheck, Columns3Cog, NotebookPen, LogOut } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarRail } from '../ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import CustomAppLucidIcon from '@/assets/AppLucidIcon'
import { useState, type ForwardRefExoticComponent, type RefAttributes } from 'react'
import { appPaths } from '@/assets/paths'
import { Calendar } from "@/components/ui/calendar"
import { useNavigate } from 'react-router'

interface IMenuItem {
  title: string,
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
  sub: {
    title: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    src?: string
  }[]
}

// Menu items.
const menuItems: IMenuItem[] = [
  {
    title: "Reservations",
    icon: Book,
    sub: [{
      title: "Manage Bookings",
      icon: FileCogIcon
    },
    {
      title: "Booking Calendar",
      icon: Calendar1
    }
    ]
  },
  {
    title: "Guest Management",
    icon: Users,
    sub: [
      { title: "Guest Directory", icon: FolderTree },
      { title: "Feedback", icon: Vibrate },
    ]
  },
  {
    title: "Billing and Payments",
    icon: CreditCard,
    sub: [
      { title: "Invoices", icon: BookCheck },
      { title: "Point of Sale", icon: Percent },
    ]
  },
  {
    title: "Room Management",
    icon: DoorOpen,
    sub: [
      { title: "Manage", icon: Columns3Cog, src: appPaths.dashboard.room.manage },
      { title: "Room Status", icon: NotebookPen, src: appPaths.dashboard.room.roomStatus },
    ]
  }
]

interface IProps {
  handlePathChange: (path?: string) => void
}

const AppSidebar = (props: IProps) => {

  const [date, setDate] = useState<Date | undefined>(
    new Date(2025, 7, 22)
  )
  const navigate = useNavigate()

  function handleLogout(){
    localStorage.removeItem("auth")
    navigate(appPaths.auth.login)
  }

  return (
    <Sidebar className='padding-2' variant='inset' collapsible='icon' >

      <SidebarHeader className='flex justify-center items-start'>
        <SidebarGroup>
          <CustomAppLucidIcon style={{ fill: "currentColor" }} className="w-12 h-12 text-blue-500" />
        </SidebarGroup>
      </SidebarHeader>

      <SidebarContent>

      <SidebarGroup >
          <SidebarMenuButton asChild onClick={() => props.handlePathChange(appPaths.dashboard.base)} className='cursor-pointer'>
            <span>
              <Cpu />
              <span>Dashboard</span>
            </span>
          </SidebarMenuButton>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <Calendar className="[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
            />
          </SidebarGroupContent>

        </SidebarGroup>

        <SidebarGroup>
          {menuItems.map((item) => <Collapsible className="group/collapsible">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className='cursor-pointer'>
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.sub.map((subItem) => <SidebarMenuSubItem className='cursor-pointer'>
                  <SidebarMenuSubButton onClick={() => props.handlePathChange(subItem.src)} > <subItem.icon /> {subItem.title}</SidebarMenuSubButton>
                </SidebarMenuSubItem>)}

              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>)}
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
                sideOffset={5}
              >
                <DropdownMenuItem className='w-50'>

                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout}>
              <LogOut/>
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar