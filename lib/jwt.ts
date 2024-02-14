function base64UrlDecode(input: string): string {
    let base64 = input.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
        base64 += '=';
    }

    return atob(base64);
}

export function decodeJWT(token: string): object | null {
    const parts = token.split('.');

    if (parts.length !== 3) {
        alert('Invalid JWT format');
        return null;
    }

    const [header, payload] = parts.map(base64UrlDecode);

    try {
        const decodedHeader = JSON.parse(header);
        const decodedPayload = JSON.parse(payload);

        return {
            header: decodedHeader,
            payload: decodedPayload,
        };
    } catch (error) {
        alert(`Error decoding JWT: ${error}`);
        return null;
    }
}
