import { IPost } from "@/shared/config/interfaces/IPost";
import { postsMock } from "@/shared/config/postsMock";
import { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const getPosts = () => {
    return postsMock;
  };

  useEffect(() => {
    console.log("loading");
    setPosts(getPosts());
  }, []);

  return { posts, setPosts };
};

export default usePosts;
