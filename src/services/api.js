// src/services/api.js

export const fetchData = async (endpoint) => {
    const baseUrl = '/wp-json/wp/v2/';
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
