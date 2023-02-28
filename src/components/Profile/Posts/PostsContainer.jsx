import React from "react";
import {addPostAC} from "../../../redux/reducerProfile";
import {connect} from "react-redux";
import Post from "./Post/Post";
import posts from "./Posts.module.css";
import PostsForm from "./PostsForm";
;

const Posts = (props) => {

    let currentPosts = props.profilePage.posts.map((post) => {
        return (
            <Post message={post.message} like={post.like} id={post.id}/>
        )
    })

    return (
        <div className={posts}>
            <h2 className={posts.title}>My posts</h2>
            <PostsForm addPostAC={props.addPostAC}/>
            <div className={posts.list}>
                {currentPosts}
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const PostsContainer = connect(mapStateToProps, {addPostAC})(Posts)

export default PostsContainer;
