import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ThumbnailCarousel from "@/components/carousel/thumbnail";
import { Separator } from "@/components/ui/separator";
import SKUButton from "./components/sku-button";
import type { Metadata } from "next";
import { SpecsTable } from "./components/specs";

import AddToCart from "./components/add-to-cart";
import { apiClientServer } from "@/lib/localrequests";

type Props = {
    params: {
        sku: string;
    };
};

export var metadata: Metadata = {
    title: "Unknow",
    description: "cyber flake product search page",
};

interface DescriptionProp {
    html: string;
    specifications: Array<{ attribute: string; value: string }>;
}

function Description({ html, specifications }: DescriptionProp) {
    return (
        <div className="description">
            <h1 className="text-center text-2xl font-semibold lg:text-3xl">
                Description
            </h1>
            <div className="grid-cols-2 space-y-8 py-8 lg:grid lg:gap-x-12 lg:space-y-0 lg:p-12">
                <div>
                    <div
                        className="space-y-4 text-[14px]"
                        dangerouslySetInnerHTML={{
                            __html: html,
                        }}
                    />
                </div>
                <div>
                    <SpecsTable specs={specifications} />
                </div>
            </div>
        </div>
    );
}

async function ProductPage({ params: { sku } }: Props) {
    const product = await apiClientServer.getProduct(sku);

    metadata.title = `${product.name}`;
    metadata.description = product.full_description;

    return (
        <div className="space-y-16 lg:space-y-24">
            <div className="grid-cols-5 gap-8 lg:grid">
                <ThumbnailCarousel
                    className="col-span-2"
                    images={product.images}
                />
                <div className="col-span-3 mt-6 flex flex-col gap-y-5 lg:mt-0 lg:gap-y-8">
                    <div className="flex justify-between">
                        <span>
                            <a href="#">{product.brand.name}</a>
                        </span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SKUButton SKU={product.SKU} />
                                </TooltipTrigger>
                                <TooltipContent className="border bg-white font-medium text-zinc-900 shadow-sm">
                                    Click to Copy
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <h1 className="text-xl font-semibold lg:text-3xl">
                        {product.name}
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                            <h1 className="text-lg font-semibold lg:text-2xl">
                                Highlights:
                            </h1>
                            <div>
                                <div
                                    className="space-y-4 text-[0.9em]"
                                    dangerouslySetInnerHTML={{
                                        __html: product.short_description,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <span className="text-2xl font-bold lg:text-4xl">
                            ₹
                            {Intl.NumberFormat("en-IN").format(
                                product.regular_price,
                            )}
                        </span>
                        <span className="text-md text-slate-400 line-through">
                            ₹{Intl.NumberFormat("en-IN").format(product.MRP)}
                        </span>
                    </div>
                    <AddToCart id={product.id} inventory={product.Inventory} />
                    <div className="flex flex-col gap-5">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-sm font-semibold">
                                    🏡 7 day Replacement
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design
                                    pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-sm font-semibold">
                                    🚚 Free delivery
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that
                                    matches the other components&apos;
                                    aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="flex gap-x-2 lg:gap-x-8">
                <Description
                    html={product.full_description}
                    specifications={product.specifications}
                />
            </div>
        </div>
    );
}

export default ProductPage;
