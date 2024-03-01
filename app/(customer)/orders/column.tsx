"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
    id: string;
    amount: number;
    OrderID: string;
    status: string;
    paid: boolean;
};

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "OrderID",
        header: "Order ID",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "paid",
        header: "Paid",
    },
];
