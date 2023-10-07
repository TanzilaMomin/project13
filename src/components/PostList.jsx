import React,{useState,useEffect} from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { PostItem } from "./PostItem";

export const PostList=()=>{
    const [data, setData]=useState([]);

    const getData=async()=>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(result.data);
    };

    useEffect(()=>{
        getData();
    },[])

    return(
        <Grid container spacing={2}>
            {
                data.map((item)=>
                    <PostItem item={item} />
                )
            }
        </Grid>
    );
}