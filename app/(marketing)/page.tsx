import Carousel from "@/components/hero-carousel";
import Card from "@/components/product-card";
import BestSeller from "@/app/(marketing)/best-seller";
import { apiClientServer } from "@/lib/localrequests";
import { getAssest } from "@/lib/utils";

async function Home() {
    const data = await apiClientServer.getHome();

    return (
        <>
            <Carousel
                banner={data.banners}
                notice1={data.notices.top}
                notice2={data.notices.top}
            />
            <div className="mt-8 flex flex-col gap-y-16 lg:mt-20 lg:gap-y-36">
                <section className="flex flex-col gap-y-6">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">
                            Fail-Safe Favorites: Where Reliability Meets
                            Affordable Best Sellers! 💼🛒💰
                        </p>
                        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl">
                            Best-Sellers
                        </h1>
                    </div>
                    <div className="grid-cols-2 gap-4 space-y-4 xl:grid">
                        <BestSeller bestSellers={data.best_seller} />
                        <video
                            src={getAssest(data.video.video)}
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
                            For latest deals tag line is "Stay Ahead, Save Big:
                            Dive into Our Latest Deals Extravaganza! 🚀💰💥
                        </p>
                        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl">
                            Latest Deals
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {data.latest.map((product: any) => (
                            <Card
                                className="my-1 shadow-elevated"
                                key={product.id}
                                id={product.id}
                                brand={product.brand.name}
                                title={product.name}
                                price={product.regular_price}
                                discount={product.MRP}
                                image={getAssest(product.thumbnail)}
                                link={`/product/${product.SKU}/`}
                                wishlist={true}
                            />
                        ))}
                    </div>
                </section>
                <section className="flex flex-col gap-y-6">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold">
                            For hand picked tag line is "Crafted with Care: Your
                            Personal Selections Await Discovery! ✨🔍🎁
                        </p>
                        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl">
                            Hand Picked
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {data.hand_picked.map((product: any) => (
                            <Card
                                className="my-1 shadow-elevated"
                                key={product.id}
                                id={product.id}
                                brand={product.brand.name}
                                title={product.name}
                                price={product.regular_price}
                                discount={product.MRP}
                                image={getAssest(product.thumbnail)}
                                link={`/product/${product.SKU}/`}
                                wishlist={true}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
