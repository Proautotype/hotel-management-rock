import { AreaChartOnly } from '@/components/custome/appCharts/CustomeChart'
import { RadialChartOnly } from '@/components/custome/appCharts/RadialChart'
import Combobox from '@/components/custome/Combobox'
import CustomeInput from '@/components/custome/CustomeInput'
import { type AvailableRooms, type Payment } from '@/components/custome/table/columns'
import DataTable from '@/components/custome/table/DataTable'
import TooltipControl from '@/components/custome/TooltipControl'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Dialog, DialogDescription, DialogTitle, } from '@radix-ui/react-dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Separator } from '@radix-ui/react-separator'
import type { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'
import { ArrowBigLeftDash, ArrowBigRightDash, ArrowRight, ArrowUpCircle, AtSign, BookOpenCheck, CheckCircle, CreditCardIcon, DollarSign, DoorClosed, DoorClosedLocked, EllipsisIcon, MenuSquareIcon, User2 } from 'lucide-react'
import { useState } from 'react'
//Guest Name	Room	Check-in	Check-out	Status	Payment
const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "guestName",
        header: () => {
            return <div className='flex items-center justify-center gap-1'>
                <AtSign />
                <p>Guest Name</p>
            </div>
        }
    },
    {
        accessorKey: "room",
        header: () => {
            return <div className='flex items-center  justify-center gap-1'>
                <DoorClosedLocked />
                <p>Room</p>
            </div>
        }
    },
    {
        accessorKey: "checkIn",
        header: () => {
            return <div className='flex items-center  justify-center gap-1'>
                <ArrowBigRightDash />
                <p>Check-in</p>
            </div>
        }
    },
    {
        accessorKey: "checkOut",
        header: () => {
            return <div className='flex items-center  justify-center gap-1'>
                <ArrowBigLeftDash />
                <p>Check-out</p>
            </div>
        }
    }
    ,
    {
        accessorKey: "status",
        header: () => {
            return <div className='flex items-center  justify-center gap-1'>
                <BookOpenCheck />
                <p>Status</p>
            </div>
        }
    },
    {
        accessorKey: "payment",
        header: () => {
            return <div className='flex items-center  justify-center gap-1'>
                <CreditCardIcon />
                <p>Payment</p>
            </div>
        }
    }
]



const DashboardMain = () => {

    const [toggleVisits, setToggleVisits] = useState(false)
    const [toggleBooking, setToggleBooking] = useState(false)

    function handleToggleBooking(e: React.MouseEvent) {
        e.preventDefault()
        setToggleBooking((prev) => !prev)
    }

    const AvailableRoomsColumns: ColumnDef<AvailableRooms>[] = [
        {
            accessorKey: "room",
            header: 'Room Number',
            id: "100",
            enableHiding: true,
            enableSorting: true
        },
        {
            accessorKey: "pricing",
            header: 'Pricing',
            id: "120",
            enableHiding: true
        },
        {
            accessorKey: "action",
            header: 'Action',
            id: "140",
            enableHiding: true,
            cell: () => {
                const actions = [
                    {
                        name: "Book Room",
                        icon: <User2 />
                    }
                ]
                return <TooltipControl title="Action" >

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className='flex justify-center'> <EllipsisIcon className="text cursor-pointer">Book</EllipsisIcon></div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='flex flex-col gap-2 rounded bg-purple-600 p-1'>
                            {actions.map((act) => {

                                return <DropdownMenuItem onClick={handleToggleBooking} className='flex items-center justify-between gap-1  rounded cursor-pointer p-1 text-secondary' >   {act.icon} <span>{act.name}</span> </DropdownMenuItem>
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TooltipControl>
            }
        }
    ]

    function getData(): Payment[] {
        return [
            {
                id: "728ed52f",
                amount: 200,
                status: "pending",
                checkIn: dayjs().format("YYYY-MM-DD T HH:mm:ss"),
                checkOut: dayjs().add(3, 'days').format("YYYY-MM-DD T HH:mm:ss"),
                guestName: "Winston",
                room: "Room 1",
                payment: "Pending"
            },
            {
                id: "728ed52f",
                amount: 200,
                status: "pending",
                checkIn: dayjs().add(1, 'days').format("YYYY-MM-DD T HH:mm:ss"),
                checkOut: dayjs().add(3, 'days').format("YYYY-MM-DD T HH:mm:ss"),
                guestName: "Akwesi Mankani",
                room: "Room 102",
                payment: "Paid"
            },
            {
                id: "728ed52f",
                amount: 200,
                status: "processing",
                checkIn: dayjs().subtract(2, 'days').format("YYYY-MM-DD T HH:mm:ss"),
                checkOut: dayjs().subtract(1, 'days').format("YYYY-MM-DD T HH:mm:ss"),
                guestName: "John Boadu",
                room: "Room 2",
                payment: "Processing"
            },
        ]
    }

    function getAvailableRooms(): AvailableRooms[] {
        return [
            {
                id: "1",
                room: "Room 3",
                pricing: 2000,
                action: "Action",
            },
            {
                id: "2",
                room: "Room 5",
                pricing: 200,
                action: "Action",
            },

            {
                id: "3",
                room: "Room 7",
                pricing: 250,
                action: "Action",
            }
        ]
    }

    return (
        <div>
            <Dialog open={toggleBooking} modal>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Booking <span className='p-1 border rounded bg-indigo-400'>{'Room 103'}</span> </DialogTitle>
                        <DialogDescription>
                            Please fill in the required client's information
                        </DialogDescription>
                    </DialogHeader>
                    <Separator className='border-1' />
                    <div className="flex items-center gap-2">
                        <div className="grid flex-1 gap-2">
                            <div className='flex items-center gap-1'>
                                <p>Pricing = (Rate per 12hrs)</p>
                            </div>
                            <Separator />
                            <CustomeInput title='Name' type='text' />
                            <CustomeInput title='Phone' type='tel' />
                            <CustomeInput title='Pricing' type='number' hideTitle={false} defaultValue={"Gh₵ 250"} disable />
                            <Combobox placeHolder="Select duration" data={
                                [
                                    {label: "Hours", value:"hours"},
                                    {label: "Days", value:"days"},
                                    {label: "Weeks", value:"weeks"},
                                    {label: "Months", value:"months"}   
                                ]
                                } />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-between">
                        <Button>Create</Button>
                        <DialogClose>
                            <Button type="button" onClick={handleToggleBooking}>
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="bg-muted/50 aspect-video rounded-xl flex flex-col items-start gap-3 p-5">
                        <div className='flex w-full justify-between items-between'>

                            <div className='flex items-center justify-center gap-2'>
                                <CheckCircle />
                                <p className='txt'>Total Bookings</p>
                            </div>

                            <div className='flex gap-1'>
                                <Badge variant="outline">
                                    <ArrowUpCircle />
                                    +12
                                </Badge>

                                <MenuSquareIcon style={{ cursor: 'pointer' }} onClick={() => setToggleVisits((prev) => !prev)} />
                            </div>

                        </div>
                        <div className='border w-full' />
                        {
                            toggleVisits ?
                                <div className='w-full'>
                                    <div className='flex items-center gap-2'>
                                        <span className='border w-20 rounded-lg p-0 text-purple-400'>Today's</span>
                                        <ArrowRight size={'20'} />
                                        <p className='text-2xl'>130</p>
                                        <p className='text'>(count)</p>
                                    </div>
                                    <div className='border w-full m-2' />
                                    <div className='flex items-center gap-2'>
                                        <span className='border w-20 rounded-lg p-0 text-purple-500'>Weekly</span>
                                        <ArrowRight size={'20'} />
                                        <p className='text-2xl'>310</p>
                                    </div>
                                    <div className='border w-full m-2' />
                                    <div className='w-full flex items-center gap-2'>
                                        <span className='border w-20 rounded-lg p-0 text-purple-600'>Total</span>
                                        <ArrowRight size={'20'} />
                                        <p className='text-2xl'>510</p>
                                    </div>
                                </div>
                                :
                                <div className='w-full'>
                                    <RadialChartOnly />
                                </div>
                        }
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
                        <AreaChartOnly />
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
