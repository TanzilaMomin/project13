import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const CategoriesItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card sx={{bgcolor: "pink "}}>
                <CardContent>
                    <h2>
                        {item.toUpperCase()}
                    </h2>
                </CardContent>
            </Card>
        </Grid>
    );
}