import { IPost } from "@/shared/config/interfaces/IPost";

export interface IPostCard {
  post: IPost;
  handleTagClick: (tag: string) => void;
}
