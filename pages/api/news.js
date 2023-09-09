// pages/api/news.js

export default async function handler(req, res) {
    try {
        const response = await fetch(
            'https://newsapi.org/v2/top-headlines' +
            `?country=in&category=sports&apiKey=d543e82f8ce34b8a96a751c04bdd131d` +
            `&page=${req.query.page || 1}` +
            `&pageSize=${req.query.pageSize || 9}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error proxying request:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
}
