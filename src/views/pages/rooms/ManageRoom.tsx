import CustomeInput from "@/components/custome/CustomeInput"
import DataTable from "@/components/custome/table/DataTable"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import {
  // getCoreRowModel,
  // getFilteredRowModel,
  // getPaginationRowModel,
  // getSortedRowModel,
  // useReactTable, 
  type ColumnDef, 
  // type ColumnFiltersState, type SortingState, type VisibilityState,
} from '@tanstack/react-table'
import { ArrowDown, ArrowLeftRight, CogIcon, Copy, MoreHorizontal, Trash2 } from "lucide-react"
import { useState } from "react"

enum RoomType {
  Single, Double, Suite
}

enum RoomStatus {
  Available, Occupied, Cleaning, Maintenance
}

enum Actions {
  Edit, Delete
}

interface ManageRoom {
  id: string,
  room: string,
  type: RoomType,
  status: RoomStatus,
  pricePerTime: number,
  floor: number,
  occupancy: "Empty" | string,
  action: Actions,
}

const manageRoomsColumns: ColumnDef<ManageRoom>[] = [
  {
    accessorKey: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'room',
    header: "Room #"
  },
  {
    accessorKey: 'type',
    header: "Type"
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button variant={'ghost'}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowDown />
        </Button>
      )
    },
    cell: ({row}) => <div> {(row.getValue('status') as RoomStatus).toString()}</div>
  },
  {
    accessorKey: 'pricePerTime',
    header: ({ column }) => <Button variant={'ghost'}
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Price/Time
      <ArrowDown />
    </Button>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("pricePerTime"))
      const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GHS"
      }).format(price)
      return <div className="font-medium">{formattedAmount}</div>
    }
  }, {
    accessorKey: 'floor',
    header: "Floor"
  }, {
    accessorKey: 'occupancy',
    header: "Occupancy"
  }, {
    accessorKey: 'action',
    enableHiding: false,
    cell: ({ row }) => {
      const room = row.original
      return (<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="flex flex-col gap-2 p-2 w-35 bg-background text-foreground border-2 rounded">
          <DropdownMenuLabel className="flex items-center justify-center gap-1">
            <CogIcon className=""/>
            <span>Actions</span>
          </DropdownMenuLabel>
          <DropdownMenuItem className="flex gap-1 items-center justify-start p-1 rounded border cursor-pointer" onClick={() => navigator.clipboard.writeText(room.id)}>
            <span><Copy/></span>
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-1 items-center justify-start  p-1 bg-background rounded border-2 cursor-pointer text-green-300 hover:bg-green-50 hover:text-green-400">
            <ArrowLeftRight fontSize={5}/>
            Edit Room
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-1 items-center justify-start  p-1 bg-background rounded border-2 cursor-pointer text-red-300 hover:bg-red-50 hover:text-red-400">
            <Trash2 style={{fontSize: "10px"}} />
            Delete Room
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>)
    }
  }
]



const ManageRoom = () => {

  const [rooms] = useState<ManageRoom[]>([
    {
      id: "1",
      room: "101",
      type: RoomType.Single,
      status: RoomStatus.Available,
      pricePerTime: 50,
      floor: 1,
      occupancy: "Empty",
      action: Actions.Edit,
    },
    {
      id: "2",
      room: "102",
      type: RoomType.Double,
      status: RoomStatus.Occupied,
      pricePerTime: 75,
      floor: 1,
      occupancy: "Alice Smith",
      action: Actions.Edit,
    },
    {
      id: "3",
      room: "103",
      type: RoomType.Suite,
      status: RoomStatus.Maintenance,
      pricePerTime: 150,
      floor: 1,
      occupancy: "Empty",
      action: Actions.Delete,
    },
    {
      id: "4",
      room: "201",
      type: RoomType.Single,
      status: RoomStatus.Cleaning,
      pricePerTime: 55,
      floor: 2,
      occupancy: "Empty",
      action: Actions.Edit,
    },
    {
      id: "5",
      room: "202",
      type: RoomType.Double,
      status: RoomStatus.Occupied,
      pricePerTime: 80,
      floor: 2,
      occupancy: "Brian Adams",
      action: Actions.Edit,
    },
    {
      id: "6",
      room: "203",
      type: RoomType.Suite,
      status: RoomStatus.Available,
      pricePerTime: 140,
      floor: 2,
      occupancy: "Empty",
      action: Actions.Delete,
    },
    {
      id: "7",
      room: "301",
      type: RoomType.Single,
      status: RoomStatus.Occupied,
      pricePerTime: 60,
      floor: 3,
      occupancy: "John Doe",
      action: Actions.Edit,
    },
    {
      id: "8",
      room: "302",
      type: RoomType.Double,
      status: RoomStatus.Available,
      pricePerTime: 85,
      floor: 3,
      occupancy: "Empty",
      action: Actions.Edit,
    },
    {
      id: "9",
      room: "303",
      type: RoomType.Suite,
      status: RoomStatus.Cleaning,
      pricePerTime: 160,
      floor: 3,
      occupancy: "Empty",
      action: Actions.Delete,
    },
    {
      id: "10",
      room: "401",
      type: RoomType.Single,
      status: RoomStatus.Maintenance,
      pricePerTime: 50,
      floor: 4,
      occupancy: "Empty",
      action: Actions.Edit,
    },
    {
      id: "11",
      room: "402",
      type: RoomType.Double,
      status: RoomStatus.Occupied,
      pricePerTime: 90,
      floor: 4,
      occupancy: "Emma Watson",
      action: Actions.Delete,
    },
    {
      id: "12",
      room: "403",
      type: RoomType.Suite,
      status: RoomStatus.Available,
      pricePerTime: 145,
      floor: 4,
      occupancy: "Empty",
      action: Actions.Edit,
    },
    {
      id: "13",
      room: "501",
      type: RoomType.Single,
      status: RoomStatus.Cleaning,
      pricePerTime: 60,
      floor: 5,
      occupancy: "Empty",
      action: Actions.Delete,
    },
    {
      id: "14",
      room: "502",
      type: RoomType.Double,
      status: RoomStatus.Available,
      pricePerTime: 95,
      floor: 5,
      occupancy: "Empty",
      action: Actions.Edit,
    },
    {
      id: "15",
      room: "503",
      type: RoomType.Suite,
      status: RoomStatus.Occupied,
      pricePerTime: 170,
      floor: 5,
      occupancy: "Sophia Lee",
      action: Actions.Edit,
    }
  ])

  // const [sorting, setSorting] = useState<SortingState>([])
  // const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
  //   []
  // )
  // const [columnVisibility, setColumnVisibility] =
  //   useState<VisibilityState>({})
  // const [rowSelection, setRowSelection] = useState({})

 /*
  const table = useReactTable({
    data: rooms,
    columns: manageRoomsColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
 */

  return (
    <div className="p-1">
      <CustomeInput title="Search" type="text" />
      <DataTable columns={manageRoomsColumns} data={rooms} />
    </div>
  )
}

export default ManageRoom