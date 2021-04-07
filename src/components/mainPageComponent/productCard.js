import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { makeStyles } from "@material-ui/core/styles";
import productData from "./productData";
import GridList from "@material-ui/core/GridList";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputGroup from "react-bootstrap/InputGroup";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
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
        {productData.map((tile) => (
          <Card style={{ height: "100%", width: "100%" }}>
            <center>
              <Card.Img variant="top" src={tile.img} style={{ width: "70%" ,margin:'5%'}} />
            </center>
            <Card.Title style={{ fontSize: "15px",textAlign:'left',marginLeft:'2%' }}>{tile.title}</Card.Title>
            <Card style={{margin:'5%'}}>
              <FormControl className={classes.margin}>
                <InputLabel
                  htmlFor="demo-customized-select-native"
                  style={{ fontSize: "70%" }}
                >
                  50g - Rs 72.00
                </InputLabel>
                <NativeSelect id="demo-customized-select-native">
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>

              <Card.Body style={{backgroundColor:'#d9d9d9'}}>
                <div>
                  <div style={{textAlign:'left'}}>
                    <span style={{fontSize:'10px'}}>MRP <strike>  RS 20 </strike> </span>  Rs. 14.85
                    <div style={{fontSize:'10px'}}>
                    <p>Standard Delivery. Tommorrow
                    <p>7:30Am - 9:30PM</p></p>
                    </div>
                  </div>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend style={{height:'55% !important'}}>
                      <InputGroup.Text
                        id="inputGroup-sizing-sm"
                        style={{ fontSize: "9px",height:'20px'}}
                      >
                        Qty
                      </InputGroup.Text>
                      <input 
                        variant="outlined"
                        style={{ padding: "0", width: "35px ",padding:'0',height:'20px',marginRight:'30%'}}
                      />
                     
                        <Button
                          variant="contained"
                          style={{height:'20px',width:'35px'}}
                          style={{ backgroundColor: "#FCD12A" }}
                        >
                          <Typography style={{fontSize:'9px'}}>
                            Add
                          </Typography>
                        </Button>
                    </InputGroup.Prepend>
                  </InputGroup>
                </div>
              </Card.Body>
            </Card>
          </Card>
        ))}
      </GridList>
    </div>
  );
}
