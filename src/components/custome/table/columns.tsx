

export type Payment= {
    id: string, 
    amount: number, 
    status: "pending" | "processing" | "success" | "failed",
    checkIn: string,
    checkOut: string,
    guestName: string,
    room: string,
    payment: "Paid" | "Pending" | "Processing" 
}

export type AvailableRooms= {
    id: string, 
    room: String, 
    pricing: number,
    action: string
}
