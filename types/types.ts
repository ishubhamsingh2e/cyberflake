export interface JwtPayload {
    name: string;
    phone: string;
    exp: number;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    parent: null | Category;
}

export interface Brand {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    tags: Tag[];
    categories: Category[];
    bundle_products: any[];
    brand: Brand;
    short_description: string;
    full_description: string;
    latest: boolean;
    hand_picked: boolean;
    best_seller: boolean;
    state: string;
    name: string;
    thumbnail: string | null;
    SKU: string;
    MRP: number;
    regular_price: number;
    sale_price: number | null;
    limit_stock_to: number | null;
    discount: string | null;
    Inventory: number;
    weight: null | number;
    length: null | number;
    breadth: null | number;
    height: null | number;
    text_rendered: string | null;
    upsell_products: Product[];
    cross_sell_products: Product[];
}

export interface CartItem {
    id: number;
    product: Product;
    quantity: number;
    user: number;
}
