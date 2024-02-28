"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import Card from "../../components/product-card";
import { Product } from "@/types/types";

interface BestSellerProps {
    bestSellers: Product[];
}

function BestSeller({ bestSellers }: BestSellerProps) {
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
                    {bestSellers.map((product, key) => (
                        <SplideSlide key={key} aria-label="Trending">
                            <Card
                                key={product.id}
                                id={product.id}
                                brand={product.brand.name}
                                title={product.name}
                                price={product.regular_price}
                                discount={product.MRP}
                                image={`https://api.cyberflake.in${product.thumbnail}`}
                                link={`/product/${product.SKU}/`}
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
                    {bestSellers.map((product, key) => (
                        <SplideSlide key={key} aria-label="Trending">
                            <Card
                                key={product.id}
                                id={product.id}
                                brand={product.brand.name}
                                title={product.name}
                                price={product.regular_price}
                                discount={product.MRP}
                                image={`https://api.cyberflake.in${product.thumbnail}`}
                                link={`/product/${product.SKU}/`}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    );
}

export default BestSeller;
