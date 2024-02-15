import Carousel from "@/components/hero-carousel";
import Card from "@/components/product-card";
import BestSeller from "@/app/(marketing)/best-seller";

async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return products.slice(1, 11);
}

async function Home() {
    const productsData = await getProducts();

    return (
        <>
            <Carousel />
            <div className="mt-8 flex flex-col gap-y-16 lg:mt-20 lg:gap-y-36">
                <section className="flex flex-col gap-y-6">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">
                            Want the latest and greatest at a cheap price? Deals
                            that will blow your minds 🤯
                        </p>
                        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl">
                            Best-Sellers
                        </h1>
                    </div>
                    <div className="grid-cols-2 gap-4 space-y-4 xl:grid">
                        <BestSeller />
                        <video
                            src="/sample/ads.mp4"
                            autoPlay
                            loop
                            muted
                            className="rounded-md shadow-md"
                        ></video>
                    </div>
                </section>
                <section className="flex flex-col gap-y-6">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">
                            Want the latest and greatest at a cheap price? Deals
                            that will blow your minds 🤯
                        </p>
                        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl">
                            Latest Deals
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {productsData.map((product: any) => (
                            <Card
                                className="my-1 shadow-elevated"
                                key={product.id}
                                brand="RAZOR"
                                title={product.title}
                                price={product.price}
                                discount={product.price}
                                image={"https://placehold.co/400x400"}
                                link="#"
                            />
                        ))}
                    </div>
                </section>
                <section className="flex flex-col gap-y-6">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">
                            Want the latest and greatest at a cheap price? Deals
                            that will blow your minds 🤯
                        </p>
                        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl">
                            Hand Picked
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {productsData.map((product: any) => (
                            <Card
                                className="my-1 shadow-elevated"
                                key={product.id}
                                title={product.title}
                                brand="RAZOR"
                                price={product.price}
                                discount={product.price}
                                image={"https://placehold.co/400x400"}
                                link="#"
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
