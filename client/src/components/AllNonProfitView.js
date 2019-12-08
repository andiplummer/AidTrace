import React, { useState }from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const posts = [

  {
    id: 1,
    title: "My first post",
    excerpt: "This is my first post with more content inside",
    image: "https://media.globalcitizen.org/5d/95/5d951dce-6943-4c48-bc59-3b0607a947ad/wfp_logo.jpg"
  },

  {
    id: 2,
    title: "My second post",
    excerpt: "This is my second post with more content inside",
    image: "https://www.guidestar.org/ViewEdoc.aspx?eDocId=5256262&approved=True"
  },

  {
    id: 3, 
    title: "My third post",
    excerpt: "This is my third post with more content inside",
    image: "https://blog.qlik.com/assets/uploads/images/direct-relief.jpg"
  },

  {
    id: 4,
    title: "My fourth post",
    excerpt: "This is my fourth post with more content inside",
    image: "https://i2.wp.com/yourmovement.ca/wp-content/uploads/2013/12/thefacts.png?fit=289%2C170"
  },

  {
    id: 5,
    title: "My fifth post",
    excerpt: "This is my fifth post with more content inside",
    image: "https://reactintl.org/wp-content/uploads/2017/10/cropped-REACT_LOGO_2018_header.png"
  },

  {
    id: 6,
    title: "My sixth post",
    excerpt: "This is my sixth post with more content inside",
    image: "https://ewscripps.brightspotcdn.com/dims4/default/3b23e40/2147483647/strip/true/crop/1024x576+0+54/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.ktvq.com%2Fcordillera-network%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F07%2F28160352%2F180917-F-ZZ000-1001.jpg"
  }
]


function AllNonProfitView(props) {
let [votes, setVotes] = React.useState(0)
  return (
    <div class="grid-container">
      <Grid class="grid">
        {posts.map(post => (
          <Grid item key={post.id} class="grid" id="card">
            <Card>
              <CardActionArea>
                <CardMedia
                  class="card-image"
                  component="img"
                  alt="Contemplative Reptile"
                  height="100%"
                  image={post.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {votes}
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AllNonProfitView