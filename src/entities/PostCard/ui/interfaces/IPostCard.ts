import { IPost } from "@/shared/config/interfaces/IPost";
import { Dispatch, SetStateAction } from "react";

export interface IPostCard {
  post: IPost;
  setPosts: Dispatch<SetStateAction<IPost[]>>;
  handleTagClick: (tag: string) => void;
}
