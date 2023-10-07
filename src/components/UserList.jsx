import React,{useState,useEffect} from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { UserItem } from "./UserItem";

export const UserList=()=>{
    const [data, setData]=useState([]);

    const getData= async ()=>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(result.data);
    };

    useEffect(()=>{
        getData();
    },[])

    return(
        <Grid container spacing={2}>
            {
                data.map((item)=>
                    <UserItem item={item} />
                )
            }
        </Grid>
    );
}