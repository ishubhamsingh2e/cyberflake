"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Card from '@/components/product-card';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

function Products() {
    const search = useSearchParams();
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const products = await res.json();
                return products.slice(0, 10);
            } catch (error) {
                console.error('Error fetching products:', error);
                return [];
            }
        }
        getProducts().then((data) => {
            setProductsData(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>
                Result for: <span className='italic text-blue-400'>{search.get('q')}</span>
            </h1>
            <section>
                <Drawer>
                    <div className='flex justify-end'>
                        <DrawerTrigger asChild>
                            <Button variant={'link'} className='text-base italic underline underline-offset-4'>Filters</Button>
                        </DrawerTrigger>
                    </div>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
                            <DrawerDescription>This action cannot be undone.</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </section>
            <section>
                {isLoading ? <div className='flex justify-center py-16'>
                    <Icons.spinner className='h-8 w-8 animate-spin' />
                </div> : <div className='grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {productsData.map((product) => (
                        <Card
                            className='my-1 shadow-elevated'
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            discount={product.price} // This seems to be a placeholder, you may want to adjust it accordingly
                            image={'https://placehold.co/400x400'}
                            link={`product/${product.id}/`}
                        />
                    ))}
                </div>}
            </section>
        </div>
    );
}

export default Products;
