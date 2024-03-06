"use client";

import { useEffect, useState } from "react";
import { columns } from "./column";
import { DataTable } from "./data-table";
import { apiClient } from "@/lib/api";
import { Order } from "@/types/types";
import Loading from "@/components/loading";

export default function Orders() {
    const [data, setData] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiClient.getOrders().then((res) => {
            setData(res);
            setIsLoading(false);
        });
    }, []);

    return isLoading ? (
        <Loading className="py-10" />
    ) : (
        <div className="container w-full py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
