import { PostCard } from "@/entities";
import { postsMock } from "@/shared/config/postsMock";

const PostsList = (): React.ReactElement => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {postsMock.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
