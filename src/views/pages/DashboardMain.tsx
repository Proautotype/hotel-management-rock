import { AvailableRoomsColumns, columns, type AvailableRooms, type Payment } from '@/components/custome/table/columns'
import DataTable from '@/components/custome/table/DataTable'
import { Badge } from '@/components/ui/badge'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpCircle, BadgeIcon, BookAlert, CheckCircle, DollarSign, DoorClosed } from 'lucide-react'
import React, { useEffect } from 'react'


const DashboardMain = () => {

    function getData(): Payment[] {
        return [
            {
                id: "728ed52f",
                amount: 200,
                status: "pending",
                email: "winstyngyen@gmail.com",
            },
            {
                id: "728ed52f",
                amount: 300,
                status: "pending",
                email: "loata@gmail.com",
            },
            {
                id: "728ed52f",
                amount: 500,
                status: "pending",
                email: "m@example.com",
            },
        ]
    }

    function getAvailableRooms():AvailableRooms[]  {
        return [
            {
                room: "Room 1",
                pricing: 2000,
                action: "Action",
            },
            {
                room: "Room 2",
                pricing: 200,
                action: "Action",
            }
        ]
    }

    return (
        <div>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="bg-muted/50 aspect-video rounded-xl flex flex-col items-start gap-3 p-5">
                        <div className='flex w-full justify-between items-between'>

                            <div className='flex items-center justify-center gap-2'>
                                <CheckCircle />
                                <p className='txt'>Total Bookings (Today / Week)</p>
                            </div>

                            <Badge variant="outline">
                                <ArrowUpCircle />
                                +12
                            </Badge>

                        </div>
                        <div className='border w-full' />
                        <div>
                            <div className='flex items-center gap-2'>
                                <p className='text-2xl'>Today /</p>
                                <p className='text-3xl p-1'>100</p>
                            </div>
                            <div className='border w-full' />
                            <div className='flex items-center gap-2'>
                                <p className='text-2xl'>This Week /</p>
                                <p className='text-3xl p-1'>100</p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-muted/50 aspect-video rounded-xl flex flex-col items-start gap-3 p-5">
                        <div className='flex w-full justify-between items-between'>

                            <div className='flex items-center justify-center gap-2'>
                                <DoorClosed />
                                <p className='txt'>Available Rooms</p>
                            </div>

                            <Badge variant="outline">
                                <ArrowUpCircle />
                                +12
                            </Badge>

                        </div>
                        <div className='border w-full' />
                        <div className='w-full'>
                            <DataTable columns={AvailableRoomsColumns} data={getAvailableRooms()} />
                        </div>
                    </div>

                    <div className="bg-muted/50 aspect-video rounded-xl flex flex-col items-start gap-3 p-5">
                        <div className='flex w-full justify-between items-between'>

                            <div className='flex items-center justify-center gap-2'>
                                <DollarSign />
                                <p className='txt'>Total Revenue</p>
                            </div>

                            <Badge variant="outline">
                                <ArrowUpCircle />
                                +12
                            </Badge>

                        </div>
                        <div className='border w-full' />
                    </div>
                </div>
                <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div>

            <div>
                <DataTable columns={columns} data={getData()} />
            </div>

        </div>
    )
}

export default DashboardMain