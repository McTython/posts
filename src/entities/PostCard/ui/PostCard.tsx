import { LikeOutlined, DislikeOutlined, EyeOutlined } from "@ant-design/icons";
import { IPostCard } from "./interfaces/IPostCard";
import styles from "./PostCard.module.scss";

const PostCard = ({ post, handleTagClick }: IPostCard): React.ReactElement => {
  return (
    <div className={styles.postcard}>
      <div className={styles.postcard__user}>
        <div>
          <img
            src={
              "https://thetreeparty.nl/wp-content/uploads/2018/05/avatar-placeholder.png"
            }
            width={40}
          />
        </div>
        <div>{post.userName}</div>
      </div>
      <div>{post.title}</div>
      <div className={styles.postcard__body}>{post.body}</div>
      <div className={styles.postcard__tags}>
        {post.tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={styles.postcard__tags__button}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={styles.postcard__footer}>
        <div className={styles.postcard__footer__left}>
          <div className={styles.postcard__footer__left__reaction}>
            <button
              type="button"
              className={styles.postcard__footer__left__reaction__button}
            >
              <LikeOutlined style={{ color: "#fff" }} />
            </button>
            {post.reactions.likes}
          </div>
          <div className={styles.postcard__footer__left__reaction}>
            <button
              type="button"
              className={styles.postcard__footer__left__reaction__button}
            >
              <DislikeOutlined style={{ color: "#fff" }} />
            </button>
            {post.reactions.dislikes}
          </div>
        </div>
        <div className={styles.postcard__footer__right}>
          <EyeOutlined style={{ color: "#fff" }} />
          {post.views}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
