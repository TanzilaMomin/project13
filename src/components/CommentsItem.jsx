import React from "react";
import { Grid, Card, CardContent, Badge } from "@mui/material";

export const CommentsItem=({item})=>{
    return(
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Badge badgeContent={item.postId} color="secondary">
                       <h4>{item.name}</h4>
                    </Badge>
                    <br />
                    <a href={`mailTO:${item.email}`}>{item.email}</a>
                    <p>{item.body}</p>
                </CardContent>
            </Card>
        </Grid>
    );
}