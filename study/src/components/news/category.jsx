import React from "react";
import { CategoriesBlock,Category } from "./style";
import {categories} from "../../constants/category";

const Categories = ({handleSelect, category}) =>{
    
    return(
        <CategoriesBlock>
            {categories.map((item)=>(
                <Category
                key={item.name}
                active={category === item.name}
                onClick={()=>handleSelect(item.name)}
                >
                    {item.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}
export default Categories;