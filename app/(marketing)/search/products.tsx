"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/product-card";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

function Products() {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [minPriceFilter, setMinPriceFilter] = useState("");
    const [maxPriceFilter, setMaxPriceFilter] = useState("");

    useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const products = (await res.json()).products;
                return products.slice(0, 10);
            } catch (error) {
                console.error("Error fetching products:", error);
                return [];
            }
        }

        getProducts().then((data) => {
            setProductsData(data);
            setIsLoading(false);
        });
    }, []);

    const handleMinPriceFilterChange = (
        value: React.SetStateAction<string>,
    ) => {
        setMinPriceFilter(value);
    };

    const handleMaxPriceFilterChange = (
        value: React.SetStateAction<string>,
    ) => {
        setMaxPriceFilter(value);
    };

    const filteredProducts = productsData.filter((product) => {
        const productPrice = parseFloat(product.price);

        if (minPriceFilter && productPrice < parseFloat(minPriceFilter)) {
            return false;
        }

        if (maxPriceFilter && productPrice > parseFloat(maxPriceFilter)) {
            return false;
        }

        return true;
    });

    return (
        <section className="md:flex md:gap-6 w-full">
            <div className="hidden md:block md:w-1/6 space-y-2">
                <span>Total Results: {productsData.length}</span>
                <div className="px-4 py-6 bg-slate-100 rounded-md shadow-sm">
                    <h2 className="text-xl font-bold mb-2">Filters</h2>
                    <Separator className="my-2" />
                    <div className="space-y-3">
                        <div className="space-y-2">
                            <label htmlFor="minPriceFilter">Min Price:</label>
                            <Input
                                className="bg-slate-50"
                                type="number"
                                id="minPriceFilter"
                                placeholder="Enter min price"
                                value={minPriceFilter}
                                onChange={(e) =>
                                    handleMinPriceFilterChange(e.target.value)
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="maxPriceFilter">Max Price:</label>
                            <Input
                                className="bg-slate-50"
                                type="number"
                                id="maxPriceFilter"
                                placeholder="Enter max price"
                                value={maxPriceFilter}
                                onChange={(e) =>
                                    handleMaxPriceFilterChange(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-5/6">
                {isLoading ? (
                    <div className="flex justify-center py-16">
                        <Icons.spinner className="h-8 w-8 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filteredProducts.map((product) => (
                            <Card
                                className="my-1 shadow-elevated"
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                discount={product.price}
                                image={product.images[0]}
                                link={`product/${product.id}/`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Products;
