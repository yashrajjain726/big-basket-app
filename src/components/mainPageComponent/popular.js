import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import popular1 from '../../img/popular1.webp'
import popular2 from '../../img/popular2.webp'
import popular3 from '../../img/popular3.webp'
import popular4 from '../../img/popular4.webp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin:'2%',
    elevation:0,
    marginTop:'5%'

  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <center>
        <Typography style={{fontSize:'25px'}}>
                  Most Populars
            </Typography>
                 <hr></hr>
        </center>
    <Grid container  >
      <Grid item xs={3} md={2} lg={3}className={classes.cardsize}>
        <Paper className={classes.root} elevation={0}>
        <CardActionArea>
        <img className={classes.img} src={popular1}/>
        </CardActionArea>
        </Paper>
      </Grid>
      <Grid item xs={3} md={2} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <CardActionArea>

       
        <img className={classes.img} src={popular2}/>

        </CardActionArea>
        </Paper>
      </Grid>
      <Grid item xs={3} md={2} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <CardActionArea>


        <img className={classes.img} src={popular3}/>

        </CardActionArea>
        </Paper>
      </Grid>
      <Grid item xs={3} md={2} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <CardActionArea>


        <img className={classes.img} src={popular4}/>


        </CardActionArea>
        </Paper>
        
      </Grid>
      
    </Grid>
  </div>
  );
}