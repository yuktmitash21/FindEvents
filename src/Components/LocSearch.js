import React, { Component } from 'react'
import DisplayClose from './DisplayClose'

//component that keeps track of zipcode and range for searching tab
const API_KEY = "AIzaSyDrxuvDAzhgHeCVbMKk2ShypqjevRFE-rQ"


export default class LocSearch extends Component {


    state = {
        lattitude: 1,
        longitude: 1,
        EventList: [],
        radius: null,
        address: "",
        zipCode: null
        
    }

  render() {
     //returns a header and a Display Close Component
     return (
         <div>
         <h1>These are all events within {this.state.radius} miles of {this.state.zipCode} </h1>
         <input style = {{width: '100%'}} placeholder="Enter a zipcode" type = "text" value = {this.state.zipCode} onChange={e => this.setState({zipCode: e.target.value})}></input>
         <input style = {{width: '100%'}} type="number" placeholder = "Enter a search radius (miles)" value = {this.state.radius} onChange={e => this.setState({radius: e.target.value})}></input>
         <DisplayClose zipcode={this.state.zipCode} radius = {this.state.radius} />
         </div>

     );
}
}

