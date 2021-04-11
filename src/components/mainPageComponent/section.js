import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import section1 from '../../img/section1.webp'
import section2 from '../../img/section2.webp'
import section3 from '../../img/section3.webp'
import section4 from '../../img/section4.webp'
import section5 from '../../img/section5.webp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin:'2%',
    elevation:0,
    marginTop:'5%',
    marginBottom:'5%'

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
                 Fruits & Vegetables
            </Typography>
                 <hr></hr>
        </center>
    <Grid container  >
      <Grid item xs={6} md={6} lg={6}className={classes.cardsize}>
        <Paper className={classes.root} elevation={0}>
        <CardActionArea>
        <img className={classes.img} src={section1}style={{marginBottom:'10%'}} alt=""/>
        </CardActionArea>
        </Paper>
      </Grid>
      <Grid item xs={3} md={2} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <CardActionArea>

       
        <img className={classes.img} src={section2}style={{marginBottom:'10%'}} alt=""/>

        </CardActionArea>
        </Paper>
        <Paper className={classes.root} elevation={0}>
        <CardActionArea>


        <img className={classes.img} src={section3}style={{marginBottom:'10%'}} alt=""/>

        </CardActionArea>
        </Paper>

</Grid>
      <Grid item xs={3} md={2} lg={3}>
      
        <Paper className={classes.root} elevation={0}>
        <CardActionArea>
        <img className={classes.img} src={section5} style={{marginBottom:'10%'}} alt=""/>
        </CardActionArea>
        </Paper>     
        <Paper className={classes.root} elevation={0}>
        <CardActionArea>
        <img className={classes.img} src={section4} style={{marginBottom:'10%'}} alt=""/>

        </CardActionArea>
        </Paper>  
      </Grid>    
    </Grid>
  </div>
  );
}