import posts from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";


const Posts = (props) => {


    let currentPosts = props.postsState.posts.map((post) => {
        return (
            <Post message={post.message} like={post.like} id={post.id}/>
        )
    })


    let onButtonClick = () => {
        props.addPost();
    }
    let onChangeText = (event) => {
        let text = event.target.value
        props.changeTextBody(text)
    }


    return (
        <div className={posts}>
            <div className={posts.title}>My posts</div>
            <form className={posts.form}>
                <textarea onChange={onChangeText}
                          className={posts.input}
                          type="text"
                          value={props.postsState.newPostText}/>
                <button onClick={onButtonClick}
                        className={posts.button}
                        type='button'>
                    Add post
                </button>
            </form>
            <div className={posts.list}>
                {currentPosts}
            </div>
        </div>
    );
};


export default Posts;
