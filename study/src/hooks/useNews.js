import { useState, useCallback, useTransition } from "react";
import { useNewsQuery } from "../queries/news.query";

export const useNew = () => {
    const [category, setCategory] = useState("all");
    const [isPending, startTransition] = useTransition();
    const { data: articles = [], isLoading: loading } = useNewsQuery(category);

    const handleSelect = useCallback((category) => {
        startTransition(() => {  
            setCategory(category);
        });
    }, []);

    return {
        category,
        articles,
        loading: loading || isPending, 
        handleSelect,
    };
};
