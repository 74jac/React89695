const BASE_URL = 'https://6900b99fff8d792314bb27e3.mockapi.io/products';

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product),
    });
    
    if (!res.ok) {
        throw new Error('Error al crear producto');
    }
    const result = await res.json();
    return result;  
    };