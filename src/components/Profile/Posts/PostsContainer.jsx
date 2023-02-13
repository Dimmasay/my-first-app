import React from "react";
import {addPostCreator, currentTextPostCreator} from "../../../redux/reducerPosts";
import Posts from "./Posts";


const PostsContainer = (props) => {
   let state = props.store.getState().postsPage
   let onButtonClick = () => {
        props.store.dispatch(addPostCreator())
    }
    let onChangeText = (text) => {
        props.store.dispatch(currentTextPostCreator(text))
    }

    return (
        <Posts addPost={onButtonClick} changeTextBody={onChangeText} postsState={state}/>
    );
};


export default PostsContainer;
