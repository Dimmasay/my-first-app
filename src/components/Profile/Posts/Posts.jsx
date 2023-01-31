import posts from "./Posts.module.css";
import Post from "./Post/Post";




const Posts = (props) => {

const currentPosts = props.postData.map((post)=> {
    return (
        <Post message={post.message} like={post.like}/>
    )
})

    return (
        <div className={posts}>
            <div className={posts.title}>My posts</div>
            <form className={posts.form}>
                <input className={posts.input} type="text"/>
                <button className={posts.button} type="submit">
                    Send
                </button>
            </form>
            <div className={posts.list}>
                {currentPosts}
            </div>
        </div>
    );
};

export default Posts;
