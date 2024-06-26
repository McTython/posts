import { IReaction } from "./IReaction";

export interface IPost {
  id: number;
  userName: string;
  title: string;
  body: string;
  tags: string[];
  reactions: IReaction;
  views: number;
}
