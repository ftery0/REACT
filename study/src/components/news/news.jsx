import React from "react"
import { NewsContainer,NewsListBlock } from "./style";
import Categories from "./category";
import { UseNew } from "../../hooks/useNew";
import SkeletonComponent from "../skeleton";
import NewsItem from "./newsItem";

const News = () => {
    const {...news} = UseNew();

    return(
        <NewsContainer>
            <Categories 
                category={news.category} 
                handleSelect={news.handleSelect} 
            />
            <NewsListBlock>
                {news.loading ? (
                    <SkeletonComponent height={100}/>
                ) : news.articles.length > 0 ? (
                    news.articles.map((item) => (
                        <NewsItem key={item.url} article={item} />
                ))
                ) : (
                    <div>뉴스가 없습니다</div> 
                )}
            </NewsListBlock>
        </NewsContainer>
    )
}
export default News