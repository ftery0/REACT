import React from "react";

const PostItem = (post)=>{
    return(
        <div className="Real_Post" key={post.id}>
        <div className="post_Name">{post.name}</div>
        <div className="post_pic">{post.image}</div>
        <div className="post_tit">{post.title}</div>
        <div className="posst_Like">{post.like}</div>
      </div>
    )
}
export default PostItem;