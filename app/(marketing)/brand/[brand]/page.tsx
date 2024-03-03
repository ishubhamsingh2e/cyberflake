import React from "react";
import type { Metadata } from "next";
import { apiClientServer } from "@/lib/localrequests";
import { getAssest } from "@/lib/utils";
import Card from "@/components/product-card";

type Props = {
    params: {
        brand: string;
    };
};

export var metadata: Metadata = {
    title: "Brand",
    description: "Cyberflake is a social media platform for developers.",
};

async function Brand({ params: { brand } }: Props) {
    const data = await apiClientServer.getBrand(brand);

    metadata.title = data.brand.name;
    metadata.description = data.description;

    return (
        <div className="flex flex-col gap-10">
            <img
                className="shadow rounded-md"
                src={getAssest(data.brand.brand_image)}
                alt={data.brand.name}
            />
            <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {data.products.map((product: any) => (
                    <Card
                        className="my-1 shadow-elevated"
                        key={product.id}
                        id={product.id}
                        brand={product.brand.name}
                        title={product.name}
                        price={product.regular_price}
                        discount={product.MRP}
                        image={getAssest(product.thumbnail)}
                        link={`/product/${product.SKU}/`}
                        wishlist={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default Brand;
