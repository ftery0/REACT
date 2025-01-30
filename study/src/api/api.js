import axios from "axios";

export const newsData = async (query,apiKey) => {
    try {
        const { data } = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`
        );
        await new Promise((resolve) => setTimeout(resolve, 2000));

        return data.articles; 
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
};