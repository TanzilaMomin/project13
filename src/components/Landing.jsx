import React from "react";
import { Card, CardContent } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { NavList } from "./NavList";
import { CategoriesList } from "./CategoriesList";
import { CommentsList } from "./CommentsList";
import { PostList } from "./PostList";
import { UserList } from "./UserList";

export const Landing=()=>{
    return(

       <BrowserRouter>
           <Card sx={{bgcolor:"gray"}}>
            <CardContent>
                <NavList />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/cat" element={<CategoriesList />} />
                <Route path="/comments" element={<CommentsList />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/users" element={<UserList />} />
            </Routes>
            </CardContent>
           </Card>
       </BrowserRouter>
    );
}