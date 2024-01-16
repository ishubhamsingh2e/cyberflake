"use client"

import useEmblaCarousel from 'embla-carousel-react';
import React, { useState } from 'react'
import { Icons } from '../icons';
import { cn } from '@/lib/utils';

interface ThumbnailCarouselProps {
    images: string[]
    className?: string
}

function ThumbnailCarousel({ images, className }: ThumbnailCarouselProps) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const updateCurrent = () => {
        if (!emblaApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
    };

    const handlePrevious = () => {
        emblaApi?.scrollPrev();
        updateCurrent();
    };

    const handleNext = () => {
        emblaApi?.scrollNext();
        updateCurrent();
    };

    const handleThumbClick = (index: number) => {
        if (!emblaApi || !emblaThumbsApi) return;
        emblaApi.scrollTo(index);
        updateCurrent();
    };


    return (
        <div className={cn("space-y-2", className)}>
            <div className="relative">
                <div className='absolute z-10 flex gap-x-2 right-4 bottom-4'>
                    <button
                        onClick={handlePrevious}
                        className="h-8 w-8 rounded-full flex items-center justify-center bg-white shadow-md left-4"
                    >
                        <Icons.chevronLeft className='w-4 h-4' />
                    </button>
                    <button
                        onClick={handleNext}
                        className="h-8 w-8 rounded-full flex items-center justify-center bg-white shadow-md right-4"
                    >
                        <Icons.chevronRight className='w-4 h-4' />
                    </button>
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((slide, index) => (
                            <div key={index} className="flex-[0_0_100%] w-full  mx-4 overflow-hidden">
                                <img src={slide} alt="sample" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="overflow-hidden" ref={emblaThumbsRef}>
                <div className="flex gap-2">
                    {images.map((thumb, index) => (
                        <button key={index} onClick={() => handleThumbClick(index)} className="flex-[0_0_28%]">
                            <div
                                className="w-full flex items-center justify-center text-xl font-bold"
                                style={{
                                    opacity: index === selectedIndex ? 1 : 0.6,
                                }}
                            >
                                <img src={thumb} alt="thumbnail" className="object-cover rounded-sm" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ThumbnailCarousel
