const API_BASE_URL = 'http://localhost:5172/api';

export async function index(apiName: string) {
    const res = await fetch(`${API_BASE_URL}/${apiName}`);

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