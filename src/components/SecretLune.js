import React from 'react'
import { withRouter } from "react-router";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

const SecretLune = (props) => {
  const goToPatreon = e => {
    props.history.push('/inner-circle')
  } 
 
  const classes = useStyles();

  return (
    <Container id="secret-lune">
            <button className="secret-button" onClick={goToPatreon}>
              Upgrade to VIP Lunetribe
            </button> 
            <Grid className={classes.container} container spacing={3}>  
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <a href="/music-stream">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Lunetribe"
                            height="280"
                            image="/img/secret-imgs/music-vault.jpg"
                            title="Lunetribe"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Iris Lune Music Vault
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Access all of my music... past, present, and future! You can download it & use it for literally anything you want! (As long as you're not, like, selling it of course) Enjoy your unlimited access!
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Access Music Vault
                            </Button>
                        </CardActions>
                    </a>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <a href="/starter-pack">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Lunetribe"
                            height="280"
                            image="/img/starter-pack.jpg"
                            title="Lunetribe"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                               Free Starter Pack
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                As a gift to thank you for being a part of the Lunetribe & supporting me, I'm offering you my "Starter Pack Merch Bundle" FREE! All you have do is cover shipping & handling. Claim yours below.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Get Free Starter Pack
                            </Button>
                        </CardActions>
                    </a>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <a href="https://www.facebook.com/groups/lunetribe/" target="_blank">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Lunetribe"
                            height="280"
                            image="/img/secret-imgs/ella.jpg"
                            title="Lunetribe"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                               Exclusive Facebook Group
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                The Lunetribe Facebook group is where you'll access awesome rewards like weekly livestreams, free giveaways & early releases, and where you can engage the Lunetribe community!
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Join Facebook Group
                            </Button>
                        </CardActions>
                    </a>
                    </Card>
                </Grid>
            </Grid>
            <button className="secret-button" onClick={goToPatreon}>
              Upgrade to VIP Lunetribe
            </button> 
    </Container>
  )
}

export default withRouter(SecretLune)