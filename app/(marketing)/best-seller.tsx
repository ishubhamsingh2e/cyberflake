"use client";

import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import Card from "../../components/product-card";

const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return products.slice(1, 9);
};

function BestSeller() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="lg:hidden">
                <Splide
                    aria-label="Best-Sellers"
                    options={{
                        type: "loop",
                        gap: "10px",
                        drag: "free",
                        arrows: false,
                        pagination: false,
                        perPage: 2,
                        hoverPause: true,
                        wheel: true,
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: 0.1,
                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    {products.map((product, key) => (
                        <SplideSlide key={key} aria-label="Trending">
                            <Card
                                key={product.id}
                                brand="RAZOR"
                                title={product.title}
                                price={product.price}
                                discount={product.price}
                                image={"https://placehold.co/400x400"}
                                link="#"
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

            <div className="hidden lg:block">
                <Splide
                    aria-label="Best-Sellers"
                    options={{
                        type: "loop",
                        gap: "10px",
                        drag: "free",
                        arrows: false,
                        pagination: false,
                        perPage: 3,
                        hoverPause: true,
                        wheel: true,
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: 0.1,
                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    {products.map((product, key) => (
                        <SplideSlide key={key} aria-label="Trending">
                            <Card
                                key={product.id}
                                brand="RAZOR"
                                title={product.title}
                                price={product.price}
                                discount={product.price}
                                image={"https://placehold.co/400x400"}
                                link="#"
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    );
}

export default BestSeller;
