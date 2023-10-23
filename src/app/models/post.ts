import { Comment } from "./comment";

export interface Post{
    id:number;
    title:string;
    content:string;
    author:string;
    draft:boolean;
    created:string;
    updated:string;
    comments:Comment[];
}