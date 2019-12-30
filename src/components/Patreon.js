import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        position: 'relative'
    },
    root: {
        flexGrow: 1,
    },
    container: {
        flexFlow: 'row wrap',
    },
}));

const Patreon = props => {
    const classes = useStyles();
    return (
      <Container id="patreon">
        <Typography variant="h4">Come be a part of my creative journey!</Typography>
        <Grid className={classes.container} container spacing={3}>  
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <a href="https://www.patreon.com/join/irislunemusic/checkout?rid=3961771" target="_blank">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Lunetribe"
                    height="140"
                    image="/img/patreon-imgs/1.jpg"
                    title="Lunetribe"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lunetribe ($1 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        THANK YOU for your support, and welcome to the tribe :) You get full access to:
                        <ul>
                                <li><strong>My Patreon feed </strong>(updates, behind the scenes etc.)</li>
                                <li><strong>Lunetribe</strong> private Facebook group (livestreams, Q&A’s, merch giveaways)</li>
                        </ul>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Select
                    </Button>
                </CardActions>
            </a>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <a href="https://www.patreon.com/join/irislunemusic/checkout?rid=3961774" target="_blank">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Lunebox"
                    height="140"
                    image="/img/patreon-imgs/2.jpg"
                    title="Lunebox"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Inner Circle ($10 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Welcome to my INNER CIRCLE! Apart from my heartfelt gratitude you get full access to:
                        <ul>
                                <li>All Lunetribe perks</li>
                                <li><strong>Lunebox</strong> (access to song seeds and unreleased demos)</li>
                                <li><strong>VIP meet and greet</strong> for any show you attend (please note this isn’t a free ticket)</li>
                                <li>Are you visiting Brooklyn? Let’s grab coffee!</li>
                        </ul>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Select
                    </Button>
                </CardActions>
              </a>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <a href="https://www.patreon.com/join/irislunemusic/checkout?rid=3961778" target="_blank">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Inner Circle"
                    height="140"
                    image="/img/patreon-imgs/3.jpg"
                    title="Inner Circle"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Bring Me the Moon ($100 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        THANK YOU for making the music happen! Your generosity allows me to make my vision a reality. You will have access to:
                        <ul>
                                <li>All Inner Circle perks</li>
                                <li>Social Media and Newsletter <strong>shoutouts</strong></li>
                                <li>You'll be listed as an <strong>Executive Producer</strong> in the liner notes of my next project.</li>
                                <li>My album, <strong>THREE</strong>,  shipped right to your doorstep (a compilation of my 3 EPs in one album!)</li>
                        </ul>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Select
                    </Button>
                </CardActions>
              </a>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
    )
}

export default Patreon