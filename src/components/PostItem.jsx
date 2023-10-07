import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const PostItem=({item})=>{
    return(
        <Grid item xs={12}>
            <Card sx={{bgcolor:"aliceblue"}}>
                <CardContent>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </CardContent>
            </Card>
        </Grid>
    );
}
