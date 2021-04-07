import React, { Component } from 'react';
import lowerBanner from '../../img/lowerBanner.webp'

class LowerBanner extends Component {
    state = {  }
    render() { 
        return ( 
        <div style={{marginTop:'5%',marginBottom:'5%'}}>
            <img src={lowerBanner} style={{width:'100%'}}></img>
        </div> );
    }
}
 
export default LowerBanner;