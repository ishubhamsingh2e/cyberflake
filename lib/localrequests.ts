import { DEBUG_URL } from "./env";

class ApiRequestHandlerServer {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async handleResponse(response: Response) {
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        return response.json();
    }

    public async getHome(options?: RequestInit): Promise<any> {
        const url = `${this.baseUrl}/home/`;
        const defaultOptions: RequestInit = {
            method: 'GET',
            cache: 'no-store'
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        const res = await fetch(url, requestOptions);
        return this.handleResponse(res);
    }

    public async getBrand(brand: string, options?: RequestInit): Promise<any> {
        const url = `${this.baseUrl}/brand/${brand}/`;
        const defaultOptions: RequestInit = {
            method: 'GET',
            cache: 'no-store'
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        const res = await fetch(url, requestOptions);
        return this.handleResponse(res);
    }

    public async getHotBar(options?: RequestInit): Promise<any> {
        const url = `${this.baseUrl}/hotbar/`;
        const defaultOptions: RequestInit = {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        const res = await fetch(url, requestOptions);
        return this.handleResponse(res);
    }

    public async getProduct(SKU: string, options?: RequestInit): Promise<any> {
        const url = `${this.baseUrl}/product/${SKU}/`;
        const defaultOptions: RequestInit = {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        const res = await fetch(url, requestOptions);
        return this.handleResponse(res);
    }

    public async getTNC(options?: RequestInit): Promise<any> {
        const url = `${this.baseUrl}/docs/tnc/`;
        const defaultOptions: RequestInit = {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        const res = await fetch(url, requestOptions);
        return this.handleResponse(res);
    }

    public async getPrivacyPolicy(options?: RequestInit): Promise<any> {
        const url = `${this.baseUrl}/docs/privacy-policy/`;
        const defaultOptions: RequestInit = {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        const res = await fetch(url, requestOptions);
        return this.handleResponse(res);
    }

    public async getWarranty(options?: RequestInit): Promise<any> {
        const url = `${this.baseUrl}/docs/warranty/`;
        const defaultOptions: RequestInit = {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const requestOptions: RequestInit = { ...defaultOptions, ...options };

        const res = await fetch(url, requestOptions);
        return this.handleResponse(res);
    }
}


export const apiClientServer = new ApiRequestHandlerServer(DEBUG_URL);
