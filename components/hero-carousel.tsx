"use client";

import { getAssest } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
    banner: {
        name: string;
        image: string;
    }[];
    notice1: {
        name: string;
        image: string;
    }[];
    notice2: {
        name: string;
        image: string;
    }[];
}

function Carousel({ banner, notice1, notice2 }: CarouselProps) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const [rightTop] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const [rightBottom] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="flex items-center gap-1 justify-center">
            <div className="overflow-hidden rounded-md" ref={emblaRef}>
                <div className="flex space-x-1 max-w-[1200px]">
                    {banner.map((item, index) => (
                        <div
                            className="w-full min-w-0 flex-shrink-0 flex-grow-0"
                            key={index}
                        >
                            <img src={getAssest(item.image)} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden flex-col gap-1 lg:flex">
                <div className="overflow-hidden rounded-md" ref={rightTop}>
                    <div className="flex space-x-1">
                        {notice1.map((item, index) => (
                            <div
                                className="w-full min-w-0 flex-shrink-0 flex-grow-0"
                                key={index}
                            >
                                <img src={getAssest(item.image)} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="overflow-hidden rounded-md" ref={rightBottom}>
                    <div className="flex space-x-1">
                        {notice2.map((item, index) => (
                            <div
                                className="w-full min-w-0 flex-shrink-0 flex-grow-0"
                                key={index}
                            >
                                <img src={getAssest(item.image)} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
