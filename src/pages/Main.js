import React, { Component } from 'react';
import AppBar from '../components/mainPageComponent/appbar'
import HeroCarousel from '../components/mainPageComponent/heroCarousel'
import ProductCard from '../components/mainPageComponent/productCard'
import OfferCard from '../components/mainPageComponent/offerCard'
import LowerBanner from '../components/mainPageComponent/lowerBanner'
import BankOffer from '../components/mainPageComponent/bankOffers'
import Popular from '../components/mainPageComponent/popular'
import Section from '../components/mainPageComponent/section'
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                <AppBar/>
               
                <HeroCarousel/>
               
                <div style={{marginLeft:'10%',marginRight:'10%'}}>
                 <OfferCard/>
                 
                <ProductCard/> 
                <LowerBanner/> 
                <BankOffer/>
                <ProductCard/> 
                <Popular/>
                <Section/>

                </div>

            </div>
         );
    }
}
 
export default Main;