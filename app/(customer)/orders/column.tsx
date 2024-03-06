"use client";

import { Order } from "@/types/types";
import { ColumnDef, CellContext } from "@tanstack/react-table";
import Action from "./action";

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "order_id",
        header: "Order ID",
    },
    {
        accessorKey: "payment_id",
        header: "Payment ID",
        cell: (props: CellContext<Order, string>) => {
            return (
                <span className="text-center w-full">
                    {props.cell.getValue()
                        ? props.cell.getValue()
                        : "Payment Pending"}
                </span>
            );
        },
    },
    {
        accessorKey: "created_at",
        header: "Created At",
        cell: (props: CellContext<Order, string>) => {
            const formattedDate = formatDateTime(props.cell.getValue());
            return <span>{formattedDate}</span>;
        },
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "total_price",
        header: "Amount",
        cell: (props: CellContext<Order, string>) => {
            return (
                <span>
                    ₹
                    {Intl.NumberFormat("en-IN").format(
                        parseInt(props.cell.getValue()),
                    )}
                </span>
            );
        },
    },
    {
        accessorKey: "paid",
        header: "Paid",
    },
    {
        accessorKey: "id",
        header: "",
        cell: (props: CellContext<Order, string>) => {
            return <Action id={parseInt(props.cell.getValue())} />;
        },
    },
];

export const columnsAll: ColumnDef<Order>[] = [
    ...columns,
    {
        accessorKey: "billing_and_shipping_address_are_same",
        header: "Billing & Shipping Address Same",
        cell: (props: CellContext<Order, boolean>) => (
            <span>{props.cell.getValue() ? "Yes" : "No"}</span>
        ),
    },
    {
        accessorKey: "company_name",
        header: "Company Name",
    },
    {
        accessorKey: "GST",
        header: "GST",
    },
    {
        accessorKey: "billing_first_name",
        header: "Billing First Name",
    },
    {
        accessorKey: "billing_last_name",
        header: "Billing Last Name",
    },
    {
        accessorKey: "billing_phone",
        header: "Billing Phone",
    },
    {
        accessorKey: "billing_address_l1",
        header: "Billing Address Line 1",
    },
    {
        accessorKey: "billing_address_l2",
        header: "Billing Address Line 2",
    },
    {
        accessorKey: "billing_pincode",
        header: "Billing Pincode",
    },
    {
        accessorKey: "billing_city",
        header: "Billing City",
    },
    {
        accessorKey: "billing_state",
        header: "Billing State",
    },
    {
        accessorKey: "shipping_first_name",
        header: "Shipping First Name",
    },
    {
        accessorKey: "shipping_last_name",
        header: "Shipping Last Name",
    },
    {
        accessorKey: "shipping_phone",
        header: "Shipping Phone",
    },
    {
        accessorKey: "shipping_address_l1",
        header: "Shipping Address Line 1",
    },
    {
        accessorKey: "shipping_address_l2",
        header: "Shipping Address Line 2",
    },
    {
        accessorKey: "shipping_pincode",
        header: "Shipping Pincode",
    },
    {
        accessorKey: "shipping_city",
        header: "Shipping City",
    },
    {
        accessorKey: "shipping_state",
        header: "Shipping State",
    },
    {
        accessorKey: "updated_at",
        header: "Updated At",
        cell: (props: CellContext<Order, string>) => {
            const formattedDate = formatDateTime(props.cell.getValue());
            return <span>{formattedDate}</span>;
        },
    },
    {
        accessorKey: "transaction",
        header: "Transaction",
    },
    {
        accessorKey: "payment_id",
        header: "Payment ID",
    },
    {
        accessorKey: "user",
        header: "User",
    },
];

function formatDateTime(dateTimeString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    };

    const formattedDate = new Date(dateTimeString).toLocaleString(
        "en-US",
        options,
    );
    return formattedDate;
}
