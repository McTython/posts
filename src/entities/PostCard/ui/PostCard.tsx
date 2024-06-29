import {
  LikeOutlined,
  DislikeOutlined,
  EyeOutlined,
  DislikeFilled,
  LikeFilled,
  EyeFilled,
} from "@ant-design/icons";
import { IPostCard } from "./interfaces/IPostCard";
import styles from "./PostCard.module.scss";
import { useState } from "react";

const PostCard = ({
  post,
  setPosts,
  handleTagClick,
}: IPostCard): React.ReactElement => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const handlePostMouseOver = () => {
    if (!isViewed) {
      setPosts((prev) =>
        [
          ...prev.filter((prev) => prev.id !== post.id),
          {
            ...post,
            views: post.views + 1,
          },
        ].sort((a, b) => a.id - b.id),
      );
      setIsViewed((prev) => !prev);
    }
  };

  const handleLikeClick = () => {
    setPosts((prev) =>
      [
        ...prev.filter((prev) => prev.id !== post.id),
        {
          ...post,
          reactions: {
            likes: isLiked
              ? post.reactions.likes - 1
              : post.reactions.likes + 1,
            dislikes: isDisliked
              ? post.reactions.dislikes - 1
              : post.reactions.dislikes,
          },
        },
      ].sort((a, b) => a.id - b.id),
    );
    setIsDisliked(false);
    setIsLiked((prev) => !prev);
  };

  const handleDislikeClick = () => {
    setPosts((prev) =>
      [
        ...prev.filter((prev) => prev.id !== post.id),
        {
          ...post,
          reactions: {
            likes: isLiked ? post.reactions.likes - 1 : post.reactions.likes,
            dislikes: isDisliked
              ? post.reactions.dislikes - 1
              : post.reactions.dislikes + 1,
          },
        },
      ].sort((a, b) => a.id - b.id),
    );
    setIsLiked(false);
    setIsDisliked((prev) => !prev);
  };

  return (
    <div className={styles.postcard} onMouseOver={() => handlePostMouseOver()}>
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
              {isLiked ? (
                <LikeFilled
                  style={{ color: "#fff" }}
                  onClick={() => handleLikeClick()}
                />
              ) : (
                <LikeOutlined
                  style={{ color: "#fff" }}
                  onClick={() => handleLikeClick()}
                />
              )}
            </button>
            <p>{post.reactions.likes}</p>
          </div>
          <div className={styles.postcard__footer__left__reaction}>
            <button
              type="button"
              className={styles.postcard__footer__left__reaction__button}
            >
              {isDisliked ? (
                <DislikeFilled
                  style={{ color: "#fff" }}
                  onClick={() => handleDislikeClick()}
                />
              ) : (
                <DislikeOutlined
                  style={{ color: "#fff" }}
                  onClick={() => handleDislikeClick()}
                />
              )}
            </button>
            <p>{post.reactions.dislikes}</p>
          </div>
        </div>
        <div className={styles.postcard__footer__right}>
          {isViewed ? (
            <EyeFilled
              style={{ color: "#fff" }}
              className={styles.postcard__footer__right__views}
            />
          ) : (
            <EyeOutlined
              style={{ color: "#fff" }}
              className={styles.postcard__footer__right__views}
            />
          )}
          <p>{post.views}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
