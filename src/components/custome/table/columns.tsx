import {type ColumnDef} from '@tanstack/react-table'

export type Payment= {
    id: string, 
    amount: number, 
    status: "pending" | "processing" | "success" | "failed",
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey:"status",
        header: 'Status'
    },
    {
        accessorKey:"email",
        header: 'Email'
    },
    {
        accessorKey:"amount",
        header: 'Amount'
    }
]

export type AvailableRooms= {
    room: String, 
    pricing: number,
    action: string
}

export const AvailableRoomsColumns: ColumnDef<AvailableRooms>[] = [
    {
        accessorKey:"Room",
        header: 'Room'
    },
    {
        accessorKey:"pricing",
        header: 'Pricing'
    },
    {
        accessorKey:"Action",
        header: 'action'
    }
]