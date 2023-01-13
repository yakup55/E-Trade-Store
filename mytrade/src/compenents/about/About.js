import React, { useEffect } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function About({ about }) {
  return (
    <>
      <Grid sx={{pl:30}}  item xs={3} md={3}>
        <Grid    item xs={12}>
          <Card sx={{height:350,width:300,mb:3}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={`${about.aboutImage}`}
                alt={about.aboutDetails}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {about.aboutDetails}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
