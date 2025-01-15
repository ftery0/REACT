import React,{useState,useCallback, useEffect} from "react";
import axios from "axios";

export const useNews = ()=>{
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    const query = category === "all" ? "" : `&category=${category}`
    const apiKey = process.env.REACT_APP_API_KEY;

    const handleSelect = useCallback(category=>{
        setCategory(category);
    },[]);

    const newsData = async() =>{
        setLoading(true);
        try{
            await axios.get(`https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`).then((res)=>{
                setArticles(res.data.articles || []);
            })
        }catch(error){
            console.log();
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        newsData();
    },[category]);

    return{
        articles,
        loading,
        category,
        handleSelect,
    } 
}
