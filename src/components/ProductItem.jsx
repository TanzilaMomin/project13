import React from "react";
import { Grid,Card, CardContent, Badge, Rating, Button } from "@mui/material";

export const ProductItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <Badge badgeContent={`$${item.price}`} color="secondary">
                    <h4>{item.title.slice(0,25)}...</h4>
                    </Badge>
                    <img src={item.image} alt="" />
                    <p>{item.description.slice(0,100)}...</p>
                    <Rating value={item.rating.rate} />
                    ({item.rating.count})
                    <h6>{item.category}</h6>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth color="warning">AddtoCart</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth color="warning">Buy Now</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}