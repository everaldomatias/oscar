// src/services/api.js

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const fetchData = async (endpoint) => {
    const url = `${baseUrl}${endpoint}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return null;
    }
};
