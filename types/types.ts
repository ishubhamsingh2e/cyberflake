import Orders from "@/app/(customer)/orders/page";

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

export interface Order {
    id: number;
    order_id: string;
    paid: boolean;
    total_price: number;
    status: string;
    billing_and_shipping_address_are_same: boolean;
    company_name: null | string;
    GST: null | string;
    billing_first_name: string;
    billing_last_name: string;
    billing_phone: string;
    billing_address_l1: string;
    billing_address_l2: null | string;
    billing_pincode: string;
    billing_city: string;
    billing_state: string;
    shipping_first_name: string;
    shipping_last_name: string;
    shipping_phone: string;
    shipping_address_l1: string;
    shipping_address_l2: null | string;
    shipping_pincode: string;
    shipping_city: string;
    shipping_state: string;
    created_at: string;
    updated_at: string;
    transaction: null | string;
    payment_id: null | string;
    user: number;
};


export interface OrderItems {
    id: number,
    quantity: number,
    price: number,
    created_at: string,
    updated_at: string,
    product: Product
}
