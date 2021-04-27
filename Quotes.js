import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: 'auto',
  },
  media: {
    height: 140,
  },
  root2: {
    maxWidth: 400,
    backgroundColor: 'grey',
    margin: 'auto',
  },
  buttons: {
      alignContent: 'right',
  },
  textarea: {
      alignContent: 'justify',
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Quote
          </Typography><br/>
          <Typography variant="body2" color="textSecondary" component="p">
            25/03/2021 14:01
          </Typography><br/>
          <Typography variant="body2" color="textSecondary" component="p" color='primary'>
            BMW 5 Series 2020-1223 miles
          </Typography><br/>
          <Typography variant="body2" color="textSecondary" component="p">
            Customer Name- xxxxxxxx
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Contact Number- xxxxxxxx
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email- xxxxxxxxx
          </Typography><br/>
          <Typography variant="body2" color="textSecondary" component="p">
            Please  enter/ edit quote:
          </Typography><br/>
                     <Card className={classes.root2}>
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.textarea}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                         ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                         dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                         officia deserunt mollit anim id est laborum.
                          </Typography>
                        </CardContent>
                    </Card> 
                    {/* <TextareaAutosize
      
                     defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                     ut labore et dolore magna aliqua."
                    className={classes.root2}
                     /> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  variant="contained" color="primary">
          Back
        </Button>
        <Button variant="outlined" >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
