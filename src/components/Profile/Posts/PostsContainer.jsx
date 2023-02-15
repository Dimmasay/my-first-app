import React from "react";
import {addPostCreator, currentTextPostCreator} from "../../../redux/reducerPosts";
import Posts from "./Posts";
import {connect} from "react-redux";

;
let mapStateToProps = (state) => {

    return {
        postsState: state.postsPage
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        changeTextBody: (text) => {
            dispatch(currentTextPostCreator(text))
        }
    }

}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
