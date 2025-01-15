import React from "react";
import { NewsItemBlock } from "./style";
import NoImage from "../../assets/NoImage.jpeg";

const NewsItem = ({article}) => {
    const {title,description,url,urlToImage} = article;

    return(
        <NewsItemBlock>
            <div className="newsImage">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={urlToImage ? urlToImage : NoImage} alt="newsIamge" />
                </a>
            </div>
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}
export default NewsItem;