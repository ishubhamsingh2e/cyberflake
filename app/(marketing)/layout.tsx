import Footer from "@/components/footer";
import { SiteFooter } from "@/components/footer-bar";
import HotBar from "@/components/hot-bar";
import { Icons } from "@/components/icons";
import NavigationBar from "@/components/navigation/navigation-bar";
import NavigationMobile from "@/components/navigation/navigation-bar-mobile";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="sticky top-0 z-40">
                <div className="bg-slate-50 px-5 shadow-sm lg:px-0">
                    <div className="border-b-slate-800 lg:px-0">
                        <header className="flex h-16 items-center justify-center lg:h-20">
                            <NavigationBar className="w-full lg:w-10/12" />
                        </header>
                    </div>
                    <div className="overflow-x-hidden pb-2 pt-0 text-sm font-light text-slate-50 lg:bg-[#533267] lg:pt-2">
                        <HotBar className="hidden w-full lg:flex lg:w-auto justify-center" />
                        <search className="m-1 flex gap-x-1 lg:hidden">
                            <Search className="h-10 w-full flex-grow text-slate-900 shadow-sm lg:hidden" />
                            <Button
                                variant={"outline"}
                                size={"icon"}
                                className="h-10 w-12 flex-shrink shadow-sm"
                            >
                                <Icons.search className="h-6 w-6" />
                            </Button>
                        </search>
                    </div>
                </div>
            </div>
            <main className="ml-auto mr-auto w-11/12 flex-1 py-8 lg:pl-8 lg:pr-8 xl:w-10/12">
                {children}
            </main>
            <NavigationMobile />
            <footer>
                <div className="mt-0 flex-1 bg-slate-50 py-10 lg:mt-28 lg:py-24">
                    <Footer className="ml-auto mr-auto w-11/12 lg:w-10/12" />
                </div>
                <SiteFooter className="border-t bg-slate-50 text-slate-900" />
            </footer>
            <div className="h-20 lg:hidden"></div>
        </div>
    );
}
