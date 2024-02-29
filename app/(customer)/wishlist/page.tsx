"use client";

import Card from "@/components/product-card";
import React, { useEffect, useState } from "react";
import { apiClient } from "@/lib/api";

function Wishlist() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        apiClient.getWishlist().then((res) => {
            if (res.error) {
                alert(res.error.message);
            } else {
                setdata(res);
            }
        });
    }, []);

    return (
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data.map((item: any, index) => (
                <Card
                    className="my-1 shadow-elevated"
                    key={item.product.id}
                    id={item.product.id}
                    brand={item.product.brand.name}
                    title={item.product.name}
                    price={item.product.regular_price}
                    discount={item.product.MRP}
                    image={`https://api.cyberflake.in${item.product.thumbnail}`}
                    link={`/product/${item.product.SKU}/`}
                    wishlist={false}
                />
            ))}
        </div>
    );
}

export default Wishlist;
