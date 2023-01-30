import post from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={post.post}>
      <div className={post.avatar}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCj1fRifBy-cW-NpoVwJlOmWq7oJVC74jz1g&usqp=CAU"
          alt="avatar"
        />
      </div>
      <div className={post.body}>{props.message}</div>
      <div className={post.like}>
        <span>Like</span>
        <span>{props.like}</span>
      </div>
    </div>
  );
};

export default Post;
