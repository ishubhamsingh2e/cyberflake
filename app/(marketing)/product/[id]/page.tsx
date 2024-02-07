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
import { DigitInput } from "@/components/ui/digit-input";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Description from "./components/description";
import { Button } from "@/components/ui/button";
import SKUButton from "./components/sku-button";
import { Icons } from "@/components/icons";
import type { Metadata } from "next";

type Props = {
    params: {
        id: string;
    };
};

export var metadata: Metadata = {
    title: "Unknow",
    description: "Cyberflake is a social media platform for developers.",
};

const description = `
    <ul>
        <li>8GB 256-Bit GDDR6</li>
        <li>Boost Clock 1750 MHz</li>
        <li>1 x HDMI 2.1 3 x DisplayPort 1.4a</li>
        <li>3840 Stream Processors</li>
        <li>PCI Express 4.0</li>
    </ul>
`;

async function getProduct(id: number) {
    const query = await fetch("https://api.escuelajs.co/api/v1/products");
    const response = await query.json();
    return response[id];
}

async function ProductPage({ params: { id } }: Props) {
    const product = await getProduct(Number(id));

    metadata.title = `${product.id}: ${product.title}`;
    metadata.description = product.description;

    return (
        <div className="space-y-16 lg:space-y-24">
            <div className="grid-cols-5 gap-8 lg:grid">
                <ThumbnailCarousel
                    className="col-span-2"
                    images={[
                        product.category.image,
                        product.category.image,
                        product.category.image,
                        product.category.image,
                    ]}
                />
                <div className="col-span-3 mt-6 flex flex-col gap-y-5 lg:mt-0 lg:gap-y-8">
                    <div className="flex justify-between">
                        <span>
                            <a
                                href="#"
                            >
                                MSI
                            </a>
                        </span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SKUButton SKU="GR87U8FAH" />
                                </TooltipTrigger>
                                <TooltipContent className="border bg-white font-medium text-zinc-900 shadow-sm">
                                    Click to Copy
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <h1 className="text-xl font-semibold lg:text-3xl">
                        {product.title}: Intel Core™ i9-13900K(24 CORES(16
                        E-cores/8 P-cores/32 THREADS), 32M Cache, 5.80 GHz Max)
                        Processor
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
                                        __html: description,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-x-2">
                            <span className="text-2xl font-bold lg:text-4xl">
                                ₹45,000
                            </span>
                            <span className="text-md text-slate-400 line-through">
                                ₹50,000
                            </span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex gap-x-6">
                                <div>
                                    <DigitInput />
                                </div>
                                <p className="text-md font-semibold text-slate-500">
                                    Only{" "}
                                    <span className="text-md text-primary">
                                        12 items
                                    </span>{" "}
                                    left!
                                    <br />
                                    Don't miss it
                                </p>
                            </div>
                            <div className="w-fit">
                                <a
                                    className="flex items-center gap-x-1 underline-offset-1 hover:underline"
                                    href="#"
                                >
                                    Bulk Order{" "}
                                    <Icons.link className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div className="grid flex-grow grid-cols-2 gap-2">
                            <Button
                                variant={"outline"}
                                className="h-full w-full rounded-lg shadow-sm"
                            >
                                <Icons.bag className="mr-2 h-6 w-6" /> Add To
                                Cart
                            </Button>
                            <Button className="h-full w-full rounded-lg shadow-sm">
                                <Icons.bag className="mr-2 h-6 w-6" />
                                Buy Now
                            </Button>
                        </div>
                        <Button
                            variant={"outline"}
                            size={"icon"}
                            className="h-auto w-auto flex-shrink p-3 shadow-sm"
                        >
                            <Icons.heart className="h-6 w-6" />
                        </Button>
                    </div>
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
                <Description />
            </div>
        </div>
    );
}

export default ProductPage;
