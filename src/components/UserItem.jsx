import React from "react";
import { Grid, Card, CardContent , Badge } from "@mui/material";

export const UserItem=({item})=>{
    return(
        <Grid item xs={4}>
            <Card sx={{bgcolor:"aliceblue"}}> 
                <CardContent>
                    <Badge badgeContent={item.id} color="secondary">
                      <h3>{item.name}</h3>
                    </Badge>
                    <br />
                    <a href={`mailTo:${item.email}`}>{item.email}</a>
                    <h4> Phone : {item.phone}</h4>
                    <div className="main">
                    <h4>Address : </h4>
                    <h5> {item.address.street} , {item.address.suite} </h5>
                    <h5> zipcode : {item.address.zipcode}</h5>
                    <h5> lat :  {item.address.geo.lat}  ,  lng :{item.address.geo.lng}</h5>
                    </div>
                    <div className="sub">
                        <h4>Company :</h4>
                        <h5>{item.company.name}</h5>
                        <h5>{item.company.catchPhrase}</h5>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
}