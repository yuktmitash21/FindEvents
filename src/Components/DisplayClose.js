import React, { Component } from 'react'
import axios from 'axios'
import './MyEvents.css'

export default class DisplayClose extends Component {
    state = {
        zipcode: null,
        distance: null,
        eventArray: []
    }


    //constant refresh to check on input (zipcode and radius)
  render() {
      console.log(this.props.zipcode);
      console.log(this.props.radius);
      //https://maps.googleapis.com/maps/api/geocode/json?address=22150&key=AIzaSyDrxuvDAzhgHeCVbMKk2ShypqjevRFE-rQ
      var url1 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.props.zipcode + "&key=" + "AIzaSyDrxuvDAzhgHeCVbMKk2ShypqjevRFE-rQ"

    
      axios.get(url1).then(res => {
       
        
        if (res.data.results[0] != null) {
            
            const latt = res.data.results[0].geometry.location.lat;
            const long = res.data.results[0].geometry.location.lng;
        
            var url2 =  "https://www.eventbriteapi.com/v3/events/search/?location.within=" + this.props.radius + "mi&location.latitude=" + latt + "&location.longitude=" + long + "&categories=103&token=EQIJG4NJLSY55SDEOOQB";
            
            axios.get(url2).then(res => {
                this.setState({eventArray: res.data.events});
                console.log(res.data);

            });
            }
        });
 

    //checks if HTTP request has been processed. If yes return cards, otherwise return Searching..
     if (this.state.eventArray.length == 0) {
    return (
      <div>
          <h1 style={{float:'center', textAlign: 'center'}}>Searching...</h1>
        
      </div>
    );
      } else {

        //filtering through eventArr result of HTTPRequest
        var eventArr = this.state.eventArray;
        const events = eventArr.map((event, index)=> {
            
            
            var url;
            if (event.logo == null) {
                url =event.url;
            } else {
                url = event.logo.url;
            }
    
            //looping through array and returning individual cards
            return (
                <div className="card">
                <img style={{height: '80%', width: '100%'}} src = {url}></img>
               <a href={event.vanity_url} style={{width:'110%', paddingRight:'-70px'}}> {event.name.text}</a>
               
               </div>

            );

        });
        //return all cards
          return (
            <div className="container">
                {events}

                </div>

          );
      }
  }
}


