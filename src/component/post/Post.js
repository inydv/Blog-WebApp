import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  // const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && (
        // <img src={ PF + post.photo} alt="" className="postImg" />
        <img src={post.photo} alt="" className="postImg" />
      )}

      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title.slice(0, 13)}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
