import { IComment } from "./comment";

export interface IPost{
    id:number;
    title:string;
    content:string;
    author:string;
    draft:boolean;
    created:string;
    updated:string;
    comments:IComment[];
}