import React,{useState,useEffect} from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { ProductItem } from "./ProductItem";

export const ProductList=()=>{
    const [data, setData]=useState([]);

    const getData= async ()=>{
        const result = await  axios.get("https://fakestoreapi.com/products");
        setData(result.data);
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <Grid container spacing={2} align="center">
            {
                data.map((item)=>
                    <ProductItem item={item} />
                )
            }
        </Grid>
    );
}