import posts from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={posts}>
      <div className={posts.title}>My posts</div>
      <form className={posts.form}>
        <input className={posts.input} type="text" />
        <button className={posts.button} type="submit">
          Send
        </button>
      </form>
      <div className={posts.list}>
        <Post message ='Hi, how are you?' like='10'/>
        <Post message ='Happy birthday!!!' like='15'/>
        <Post message ='It`s my first post' like='3'/>
      </div>
    </div>
  );
};

export default Posts;
