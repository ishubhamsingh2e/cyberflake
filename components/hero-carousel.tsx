"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

function Carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const [rightTop] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const [rightBottom] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="flex items-center gap-1">
            <div className="overflow-hidden rounded-md" ref={emblaRef}>
                <div className="flex space-x-1">
                    <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                        <img
                            src="https://placehold.co/1200x608"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                        <img
                            src="https://placehold.co/1200x608"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                        <img
                            src="https://placehold.co/1200x608"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </div>
            <div className="hidden flex-col gap-1 lg:flex">
                <div className="overflow-hidden rounded-md" ref={rightTop}>
                    <div className="flex space-x-1">
                        <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                            <img
                                src="https://placehold.co/300"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                            <img
                                src="https://placehold.co/300"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                            <img
                                src="https://placehold.co/300"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-md" ref={rightBottom}>
                    <div className="flex space-x-1">
                        <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                            <img
                                src="https://placehold.co/300"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                            <img
                                src="https://placehold.co/300"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className="w-full min-w-0 flex-shrink-0 flex-grow-0">
                            <img
                                src="https://placehold.co/300"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
