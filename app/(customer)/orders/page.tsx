import { Payment, columns } from "./column";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
    return [
        {
            id: "728ed52f",
            amount: 100,
            OrderID: "e9daae04-48ac-4375-853e-09e5b92246e2",
            status: "pending",
            paid: true,
        },
    ];
}

export default async function Orders() {
    const data = await getData();

    return (
        <div className="container w-full py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
