import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";
import { Navdata } from "./Data";

export const NavList=()=>{
    return(
        <Grid container spacing={2} sx={{marginBottom:3}}>
            {
              Navdata.map((item)=>
                 <NavItem item={item} />
              )  
            }
        </Grid>
    );
}