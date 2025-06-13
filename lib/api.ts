const API_BASE_URL = 'http://localhost:5172/api';

export async function getCoffees() {
    const res = await fetch(`${API_BASE_URL}/coffee`);

    if (!res.ok) {
        throw new Error('Failed to fetch coffees');
    }

    return res.json();
}
