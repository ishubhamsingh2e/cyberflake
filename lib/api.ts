import { getCookie } from "./cookie";

class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private handleResponse(response: XMLHttpRequest): any {
        if (response.status >= 200 && response.status < 300) {
            const contentType = response.getResponseHeader("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                return JSON.parse(response.responseText);
            }
            return response.responseText;
        } else {
            throw new Error(`Request failed with status: ${response.status}`);
        }
    }

    private handleError(error: any, reject: (reason?: any) => void): void {
        console.error("Request failed:", error);
        reject(error);
    }

    async requestOTP(phone: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${this.baseUrl}/request-otp/`;
            const xhr = new XMLHttpRequest();

            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    try {
                        resolve(this.handleResponse(xhr));
                    } catch (error) {
                        this.handleError(error, reject);
                    }
                }
            };

            xhr.onerror = () => {
                this.handleError(new Error("Network error"), reject);
            };

            const payload = new URLSearchParams();
            payload.append("phone", phone);

            xhr.send(payload.toString());
        });
    }

    async verifyOTP(phone: string, otp: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${this.baseUrl}/verify-otp/`;
            const xhr = new XMLHttpRequest();

            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    try {
                        resolve(this.handleResponse(xhr));
                    } catch (error) {
                        this.handleError(error, reject);
                    }
                }
            };

            xhr.onerror = () => {
                this.handleError(new Error("Network error"), reject);
            };

            const payload = new URLSearchParams();
            payload.append("phone", phone);
            payload.append("otp", otp);

            xhr.send(payload.toString());
        });
    }

    async addName(fname: string, lname: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${this.baseUrl}/add-name/`;
            const xhr = new XMLHttpRequest();

            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("JWT", getCookie("JWT"));

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    try {
                        resolve(this.handleResponse(xhr));
                    } catch (error) {
                        this.handleError(error, reject);
                    }
                }
            };

            xhr.onerror = () => {
                this.handleError(new Error("Network error"), reject);
            };

            const payload = new URLSearchParams();
            payload.append("fname", fname);
            payload.append("lname", lname);

            xhr.send(payload.toString());
        });
    }

    async getUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${this.baseUrl}/get-user/`;
            const xhr = new XMLHttpRequest();

            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            const JWT = getCookie("JWT");

            if (!JWT) {
                return {
                    status: 401,
                }
            }

            xhr.setRequestHeader("JWT", JWT);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    try {
                        resolve(this.handleResponse(xhr));
                    } catch (error) {
                        this.handleError(error, reject);
                    }
                }
            };

            xhr.onerror = () => {
                this.handleError(new Error("Network error"), reject);
            };

            xhr.send();
        });
    }

    async getCategories(): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `${this.baseUrl}/categories/`;
            const xhr = new XMLHttpRequest();

            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    try {
                        resolve(this.handleResponse(xhr));
                    } catch (error) {
                        this.handleError(error, reject);
                    }
                }
            };

            xhr.onerror = () => {
                this.handleError(new Error("Network error"), reject);
            };

            xhr.send();
        });
    }
}

export const apiClient = new ApiClient("http://127.0.0.1:8000");
