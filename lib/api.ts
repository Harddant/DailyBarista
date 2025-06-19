const API_BASE_URL = process.env.EXPO_PUBLIC_BASE_API_URL;

export async function index(apiName: string) {
    const res = await fetch(`${API_BASE_URL}/${apiName}`, {
        headers: new Headers({
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': 'true'
        }),
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${apiName}`);
    }

    return res.json();
}

export async function get(apiName: string, id: number) {
    const res = await fetch(`${API_BASE_URL}/${apiName}/${id}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch ${apiName}`);
    }

    return res.json();
}