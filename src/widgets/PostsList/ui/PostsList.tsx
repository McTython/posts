import { PostCard } from "@/entities";
import { postsMock } from "@/shared/config/postsMock";
import { useState } from "react";
import styles from "./PostsList.module.scss";

const PostsList = (): React.ReactElement => {
  const [currentTag, setCurrentTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    if (tag === currentTag) setCurrentTag(null);
    else setCurrentTag(tag);
  };

  return (
    <div className={styles.postslist}>
      {currentTag && (
        <button
          style={{
            color: "#fff",
            background: "#864879",
            padding: "2px 15px",
            borderRadius: "15px",
            border: "none",
            outline: "none",
            fontFamily: "Roboto",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => handleTagClick(currentTag)}
        >
          {currentTag}
        </button>
      )}
      {currentTag !== null
        ? postsMock
            .filter((post) => post.tags.includes(currentTag))
            .map((post) => (
              <PostCard
                key={post.id}
                post={post}
                handleTagClick={handleTagClick}
              />
            ))
        : postsMock.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              handleTagClick={handleTagClick}
            />
          ))}
    </div>
  );
};

export default PostsList;
