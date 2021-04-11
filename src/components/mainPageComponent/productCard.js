import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ProductData from './productData'
import product1 from '../../img/product1.webp'
import product2 from '../../img/product2.webp'
import product3 from '../../img/product3.webp'
import product4 from '../../img/product4.webp'
import product5 from '../../img/product5.webp'

const useStyles = makeStyles((theme) => ({
  gridList: {
    // flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: "100%",
  },
  margin: {
    width: "100%",
  },
}));
export default function ProductCard() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Typography style={{ fontSize: "25px" }}>My Smart Basket</Typography>
      <hr></hr>

      <GridList className={classes.gridList}>
       
          <Grid container style={{height:'100%'}}>
            <Grid xs={12} lg={3}>
              <ProductData image={product1}/> 
          </Grid>
          <Grid xs={12} lg={3}>
              <ProductData image={product2}/> 
          </Grid>
          <Grid xs={12} lg={3}>
              <ProductData image={product3}/> 
          </Grid>
          <Grid xs={12} lg={3}>
              <ProductData image={product4}/> 
          </Grid>
          </Grid>
          <Grid container style={{height:'100%'}}>
            <Grid xs={12} lg={3}>
              <ProductData image={product5}/> 
          </Grid>
          <Grid xs={12} lg={3}>
              <ProductData image={product1}/> 
          </Grid>
          <Grid xs={12} lg={3}>
              <ProductData image={product2}/> 
          </Grid>
          <Grid xs={12} lg={3}>
              <ProductData image={product3}/> 
          </Grid>
          </Grid>
          
      
      </GridList>
    </div>
  );
}
