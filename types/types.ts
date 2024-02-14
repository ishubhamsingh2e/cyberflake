export interface Product {
    id: string
    name: string;
    description: string;
    image: string;
    price: number;
    discountPrice?: number;
    quantity: number;
}

export interface JwtPayload {
    name: string;
    phone: string;
    exp: number;
}
