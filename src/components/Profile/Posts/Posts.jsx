import posts from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostCreator, currentTextPostCreator} from "../../../redux/reducerPosts";


const Posts = (props) => {

    let currentPosts = props.posts.map((post) => {
        return (
            <Post message={post.message} like={post.like} id={post.id}/>
        )
    })


    let onButtonClick = () => {
        props.dispatch(addPostCreator())
    }
    let onChangeText = (event) => {
        let text = event.target.value
        props.dispatch(currentTextPostCreator(text))
    }

    return (
        <div className={posts}>
            <div className={posts.title}>My posts</div>
            <form className={posts.form}>
                <textarea onChange={onChangeText}
                          className={posts.input}
                          type="text"
                          value={props.newPostText}/>

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
