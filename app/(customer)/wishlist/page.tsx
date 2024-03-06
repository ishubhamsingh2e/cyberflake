"use client";

import Card from "@/components/product-card";
import React, { useEffect, useState } from "react";
import { apiClient } from "@/lib/api";
import { getAssest } from "@/lib/utils";
import { Product } from "@/types/types";
import Loading from "@/components/loading";

function Wishlist() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        apiClient.getWishlist().then((res) => {
            if (res.error) {
                alert(res.error.message);
            } else {
                setdata(res);
                setloading(false);
            }
        });
    }, []);

    return (
        <>
            {loading ? (
                <Loading className="py-8" />
            ) : (
                <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {data.map((item: { product: Product }) => (
                        <Card
                            className="my-1 shadow-elevated"
                            key={item.product.id}
                            id={item.product.id}
                            brand={item.product.brand.name}
                            title={item.product.name}
                            price={item.product.regular_price}
                            discount={item.product.MRP}
                            image={getAssest(item.product.thumbnail)}
                            link={`/product/${item.product.SKU}/`}
                            wishlist={false}
                            deleteWishlist={true}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default Wishlist;
