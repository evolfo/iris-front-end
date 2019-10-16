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
        <Grid className={classes.container} container spacing={3}>
          <Grid item xs={6} sm={4}>
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
                        Lunetribe ($5 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        THANK YOU for your support, and welcome to the tribe :) You get full access to:
                        <ul>
                                <li><strong>My Patreon feed </strong>(updates, behind the scenes etc.)</li>
                                <li><strong>Lunetribe</strong> (livestreams, Q&A’s, merch giveaways)</li>
                                <li><strong>Lunespiration list</strong> (monthly curated newsletter of the things that inspire me)</li>
                                <li>Monthly <strong>shoutouts </strong>on social media!</li>
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
          <Grid item xs={6} sm={4}>
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
                        Lunebox ($10 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        THANK YOU so much!! Your support means the world to me. You get full access to:
                        <ul>
                                <li>All Lunetribe perks</li>
                                <li><strong>Lunebox</strong> (access to song seeds and unreleased demos)</li>
                                <li>Access to all future releases 1 week early</li>
                                <li>10% discount on all merch</li>
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
          <Grid item xs={6} sm={4}>
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
                        Inner Circle ($25 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Welcome to my INNER CIRCLE! Apart from my heartfelt gratitude you get full access to:
                        <ul>
                                <li>All Lunebox perks</li>
                                <li><strong>Flowology </strong>(bi-weekly improv video)</li>
                                <li><strong>Snailmail</strong> (get a monthly postcard from me!)</li>
                                <li><strong>Lunehang</strong> (a private in-depth livestream, with music and stories)</li>
                                <li>UPGRADE: 20% discount on all merch</li>
                                <li>2 guest list spots for a show of your choice (you must be in this tier for at least 2 months before claiming your first pair of tickets)</li>
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
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              <a href="https://www.patreon.com/join/irislunemusic/checkout?rid=3961782" target="_blank">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Artist's Tool Box"
                    height="140"
                    image="/img/patreon-imgs/4.jpg"
                    title="Artist's Tool Box"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Artist's Tool Box ($50 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Feelin creative? Wanna get some inspiration to start your week? You DO NOT have to be a musician to get this tier, all you have to do is love music. Apart from my deep gratitude you get full access to:
                        <ul>
                                <li>All Inner Cirlce perks</li>
                                <li><strong>Luney Tunez</strong> (access to my original sample collection)</li>
                                <li><strong>Tip Jar</strong> (monthly videos of music and creativty tips)</li>
                                <li><strong>Eye to Eye</strong> (Semi-annual private online hang with me for up to 45 min!)</li>
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
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              <a href="https://www.patreon.com/join/irislunemusic/checkout?rid=3961797" target="_blank">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Eclipse"
                    height="140"
                    image="/img/patreon-imgs/5.jpg"
                    title="Eclipse"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Eclipse ($100 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        WOW! You are a true patron of the arts. Your support allows me to keep creating new music, and for that I am grateful! With this tier you get a some extra special perks, including hot sauce and personalized songs:
                        <ul>
                                <li>All Musician’s Tool Box perks</li>
                                <li><strong>Yearly SIGNED free merch Item</strong></li>
                                <li><strong>Pick My Brain!</strong> (advance access to my personal career journal entries)</li>
                                <li><strong>Your Song</strong> (a short personal song just for you, every 3 months)</li>
                                <li><strong>Personalized Happy Birthday video</strong></li>
                                <li><strong>Eclipse hot sauce 5 oz bottles</strong> (I'll send you a bottle of my own delicious hot sauce every 3 months)</li>
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
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              <a href="https://www.patreon.com/join/irislunemusic/checkout?rid=3961809" target="_blank">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Bring Me the Moon"
                    height="140"
                    image="/img/patreon-imgs/6.jpg"
                    title="Bring Me the Moon"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Bring Me the Moon ($200 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        I'm so excited to have you be a part of my journey. THANK YOU from the bottom of my heart. This tier is super special for me because I get to play live music, which is one of my favorite things in the world :) You get full access to:
                        <ul>
                                <li>All Eclipse perks</li>
                                <li><strong>Lost in the Sauce</strong></li>
                                <li>UPGRADE: Semi-annual hang is now once a month! 30 min on a video chat service of your choice</li>
                                <li>Yearly solo performance at your home (check out the 'about' section for more details)</li>
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
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              <a href="https://www.patreon.com/join/irislunemusic/checkout?rid=3961819" target="_blank">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="I'll Sing you the Sky"
                    height="140"
                    image="/img/patreon-imgs/7.jpg"
                    title="I'll Sing you the Sky"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        I'll Sing you the Sky ($600 per month)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Whoa! Give yourself a round of applause. You're amazing. And I am GRATEFUL for your support, and excited to play a full band show just for you :) You get full access to:
                        <ul>
                            <li>All Bring Me the Moon perks</li>
                            <li>UPGRADE: instead of a yearly solo show, you get a <strong>FULL BAND performance</strong> at your home! (check 'about' section for more details)</li>
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
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              <a href="https://www.patreon.com/join/irislunemusic/checkout?rid=3961828" target="_blank">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="EVERYTHING IRIS LUNE"
                    height="140"
                    image="/img/patreon-imgs/8.jpg"
                    title="EVERYTHING IRIS LUNE"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            EVERYTHING IRIS LUNE ($5,000 per month)
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            That's right... Pledge this much, and you get to book your Iris Lune  full band show immediately! You can then cancel your pledge after your first payment goes through, if you wish.
                        </Typography><br />
                        <Typography variant="body2" color="textSecondary" component="p">
                            AND, a very special one-of-a-kind item: a unique video of a live performance of the Iris Lune song of your choice, with a personal dedication.
                        </Typography><br />
                        <Typography variant="body2" color="textSecondary" component="p">
                            Also, you obviously get full access to all the other perks available in the previous tiers :)
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </a>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
    )
}

export default Patreon