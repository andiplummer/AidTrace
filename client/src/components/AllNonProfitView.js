import React, { useState } from "react";
import { Grid, Paper, Typography, Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import ethereumIcon from "@iconify/icons-fa-brands/ethereum";
import chevronUp from "@iconify/icons-mdi/chevron-up";
import chevronDown from "@iconify/icons-mdi/chevron-down";
import checkCircleOutline from "@iconify/icons-mdi/check-circle-outline";
import Modal from 'react-modal';

let posts = [

  {
    id: 1,
    title: "World Food Programme",
    excerpt: "The World Food Programme (WFP) is the food-assistance branch of the United Nations and the world's largest humanitarian organization addressing hunger and promoting food security.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/World_Food_Programme_Logo_Simple.svg/200px-World_Food_Programme_Logo_Simple.svg.png",
    votes: 0
  },

  {
    id: 2,
    title: "All Hands and Hearts",
    excerpt: "All Hands and Hearts is a U.S. 5013 nonprofit organization. The organization's current structure formed in late 2017, when two existing nonprofits, All Hands Volunteers and Happy Hearts Fund merged to become All Hands and Hearts.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/All_Hands_And_Hearts_-_Smart_Response_new_logo_%282018%29.png",
    votes: 0
  },

  {
    id: 3,
    title: "Direct Releif",
    excerpt: "Direct Relief is a humanitarian aid organization, active in all 50 states and more than 80 countries, with a mission to improve the health and lives of people affected by poverty or emergencies – without regard to politics, religion, or ability to pay",
    image: "https://i1.wp.com/www.directrelief.org/wp-content/uploads/Direct-Relief-Logo-Square-Full.png?w=1192&crop=0%2C0px%2C100%2C1189px&ssl=1",
    votes: 0
  },

  {
    id: 4,
    title: "React International Inc.",
    excerpt: "This is my fourth post with more content inside",
    image: "http://www.blackberryreact.org/new1/media/REACT_color.gif",
    votes: 0
  },

  {
    id: 5,
    title: "Habitat for Humanity",
    excerpt: "This is my fifth post with more content inside",
    image: "https://over50andoverseas.com/wp-content/uploads/2018/11/habitat-for-humanity-logo.jpg",
    votes: 0
  },

  {
    id: 6,
    title: "American Red Cross",
    excerpt: "This is my sixth post with more content inside",
    image: "https://bloximages.newyork1.vip.townnews.com/mcdowellnews.com/content/tncms/assets/v3/editorial/2/a6/2a662eaa-a34e-11e9-8752-1f55e33a45f3/5d26453489900.image.jpg?resize=400%2C400",
    votes: 0
  }
];

class AllNonProfitView extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
  return (
    <div class="grid-container">
        {posts.map(post => (
            <Card id="card">
              <CardActionArea>
              <Avatar alt="Remy Sharp" src={post.image} id="avatar"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions class="card-actions">
                <div class="buttons">
                  <div class="up-vote">
                  <Icon icon={chevronUp} onClick={() => { console.log("clicked", post.votes) 
                  return (post.votes ++)}}/>
                    <div size="small" color="primary" id="vote-number">
                      {post.votes}
                    </div>
                  <Icon icon={chevronDown} onClick={() => {
                    console.log("clicked", post.votes)
                    return (post.votes--)
                  }}/>
                  </div>
                  <Icon icon={chevronDown} />
                </div>
                <Icon icon={checkCircleOutline} class="check-mark" />
                <Icon icon={ethereumIcon} class="ethereum-icon" />
              </CardActions>
            </Card>
        ))}
      </div>
    );
  }
}

export default AllNonProfitView;
