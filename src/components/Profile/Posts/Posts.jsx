import posts from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";


const Posts = (props) => {

    let currentPosts = props.posts.map((post) => {
        return (
            <Post message={post.message} like={post.like} id={post.id}/>
        )
    })

    let newPostElement = React.createRef();
    let onButtonClick = () => {
        props.addPost()

    }
    let onChangeText = () => {
        let text = newPostElement.current.value
        props.currentTextPost(text)
    }

    return (
        <div className={posts}>
            <div className={posts.title}>My posts</div>
            <form className={posts.form}>
                <textarea onChange={onChangeText}
                          ref={newPostElement}
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
