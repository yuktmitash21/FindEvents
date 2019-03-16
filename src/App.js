import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Components/Header';
import About from './Components/About';
import EventTypeList from './Components/EventTypeList';
import './index.css'
import MyEvents from './Components/MyEvents'
import Tabs from './Components/Tabs'
import LocSearch from './Components/LocSearch'





class App extends Component {

  state = {
  
    numSelected : 0,
    eventTypes: [],
    selectedTypes: [],
    active: "aTab"

  }



  
//main app file
//gets all event categories and then calls addField
  componentDidMount() {
    fetch('https://www.eventbriteapi.com/v3/categories/?token=EQIJG4NJLSY55SDEOOQB', {
      isSelected:false
    }
    ).then(res => res.json())
    .then(json => {
      this.setState({eventTypes: json.categories, isSelected:false})
      this.addField();
     
    })
  }

  //adds an isSelected field to all eventTypes in the array
  addField() {
    this.setState({eventTypes: this.state.eventTypes.map(eventType => {
      eventType.isSelected = false;
      return eventType;
      
    }) });
    }

    //keeps track of the number of selected events with flags and separate array (makes navigating a lot easier)
    select = (id) => {
  
        
        this.setState({eventTypes: this.state.eventTypes.map(eventType => {
          if (eventType.id == id) {
            if (eventType.isSelected === true || this.state.numSelected < 3) {
              eventType.isSelected = !eventType.isSelected;
              if (eventType.isSelected) {
                this.state.numSelected = this.state.numSelected + 1;
              } else {
                this.state.numSelected = this.state.numSelected - 1;
              }
            }
            
          }
          return eventType;

        }) });

        this.state.selectedTypes = [];
        for (var i = 0; i < this.state.eventTypes.length; i++) {
          if (this.state.eventTypes[i].isSelected) {
            this.state.selectedTypes.push(this.state.eventTypes[i]);

          } 
        }

       
   
  }
  

   
 




//a little messy here. Basically it returns a different input depending on what tab the user is in
  render() {
    const content = {
      
      

      aTab: <MyEvents number={0} event = {this.state.selectedTypes}></MyEvents>,
      bTab: <MyEvents number={1} event = {this.state.selectedTypes}></MyEvents>, 
      cTab: <MyEvents number={2} event = {this.state.selectedTypes}></MyEvents>  
      
    }
    


   
    


    var currentTab = this.state.active;
    //var content = this.state.
    if (currentTab == "aTab") {
      return (
        <Router>

        
        <div className="App">
        <Route exact path="/" render={props => (
                <React.Fragment> 
                 <Header />
                 <h3 style={{textAlign: 'center'}}> Click on an event type to select it! Limit of 3.</h3>
                 <h3 style={{textAlign: 'center'}}>After you have selected one or more categories click on Find Events</h3>
                 <h3 style={{textAlign: 'center'}}>You may select {3 - this.state.numSelected} more</h3>
                 <EventTypeList legal = {this.legal} eventTypes={this.state.eventTypes} select={this.select}/>
                </React.Fragment>
              )} />
        <Route path="/about" render = {props => (
            <React.Fragment> 
            <Header />
            <About />
           </React.Fragment>
  
        )} />
        <Route path ="/eventsnearyou" render = {props => (
          <React.Fragment>
          <Header />
          <LocSearch />
          </React.Fragment>

        )} />
        <Route path="/findevents" render = {props => (
          <React.Fragment>
            <Header />
            <Tabs
              array = {this.state.selectedTypes}
              active = {this.state.active}
              onChange = {active => this.setState({active})}>
            <div key= "aTab">{this.state.selectedTypes.length > 0 ? this.state.selectedTypes[0].name : "No Event Selected Yet"}</div>
            <div key="bTab">{this.state.selectedTypes.length > 1 ? this.state.selectedTypes[1].name : "No Event Selected Yet"}</div>
            <div key="cTab">{this.state.selectedTypes.length > 2 ? this.state.selectedTypes[2].name : "No Event Selected Yet"}</div>
            </Tabs>
        
            
            <p>{content[this.state.active]}</p>
          </React.Fragment>
        )} />
  
  
  
          
  <MyEvents number={0} event = {this.state.selectedTypes}></MyEvents>
          </div>
        
        
        </Router>
        

      );

    } else if (currentTab == "bTab") {
      return (
        <Router>

        
        <div className="App">
        <Route exact path="/" render={props => (
                <React.Fragment> 
                 <Header />
                 <h3 style={{textAlign: 'center'}}> Click on an event type to select it! Limit of 3.</h3>
                 <h3 style={{textAlign: 'center'}}>After you have selected one or more categories click on Find Events</h3>
                 <h3 style={{textAlign: 'center'}}>You may select {3 - this.state.numSelected} more</h3>
                 <EventTypeList legal = {this.legal} eventTypes={this.state.eventTypes} select={this.select}/>
                </React.Fragment>
              )} />
        <Route path="/about" render = {props => (
            <React.Fragment> 
            <Header />
            <About />
           </React.Fragment>
  
        )} />
        <Route path ="/eventsnearyou" render = {props => (
          <React.Fragment>
          <Header />
          <LocSearch />
          </React.Fragment>

        )} />
        <Route path="/findevents" render = {props => (
          <React.Fragment>
            <Header />
            <Tabs
              array = {this.state.selectedTypes}
              active = {this.state.active}
              onChange = {active => this.setState({active})}>
            <div key= "aTab">{this.state.selectedTypes.length > 0 ? this.state.selectedTypes[0].name : "No Event Selected Yet"}</div>
            <div key="bTab">{this.state.selectedTypes.length > 1 ? this.state.selectedTypes[1].name : "No Event Selected Yet"}</div>
            <div key="cTab">{this.state.selectedTypes.length > 2 ? this.state.selectedTypes[2].name : "No Event Selected Yet"}</div>
            </Tabs>
       
            
            <p>{content[this.state.active]}</p>
          </React.Fragment>
        )} />
  
  
  
          
  <MyEvents number={1} event = {this.state.selectedTypes}></MyEvents>
          </div>
        
        
        </Router>
        

      );
      
    } else {
      return (
        <Router>

        
        <div className="App">
        <Route exact path="/" render={props => (
                <React.Fragment> 
                 <Header />
                 <h3 style={{textAlign: 'center'}}> Click on an event type to select it! Limit of 3.</h3>
                 <h3 style={{textAlign: 'center'}}>After you have selected one or more categories click on Find Events</h3>
                 <h3 style={{textAlign: 'center'}}>You may select {3 - this.state.numSelected} more</h3>
                 <EventTypeList legal = {this.legal} eventTypes={this.state.eventTypes} select={this.select}/>
                </React.Fragment>
              )} />
        <Route path="/about" render = {props => (
            <React.Fragment> 
            <Header />
            <About />
           </React.Fragment>
  
        )} />
        <Route path ="/eventsnearyou" render = {props => (
          <React.Fragment>
          <Header />
          <LocSearch />
          </React.Fragment>

        )} />
       
        <Route path="/findevents" render = {props => (
          <React.Fragment>
            <Header />
            <Tabs
              array = {this.state.selectedTypes}
              active = {this.state.active}
              onChange = {active => this.setState({active})}>
            <div key= "aTab">{this.state.selectedTypes.length > 0 ? this.state.selectedTypes[0].name : "No Event Selected Yet"}</div>
            <div key="bTab">{this.state.selectedTypes.length > 1 ? this.state.selectedTypes[1].name : "No Event Selected Yet"}</div>
            <div key="cTab">{this.state.selectedTypes.length > 2 ? this.state.selectedTypes[2].name : "No Event Selected Yet"}</div>
            </Tabs>
         
            
            <p>{content[this.state.active]}</p>
          </React.Fragment>
        )} />
  
  
  
          
  <MyEvents number={1} event = {this.state.selectedTypes}></MyEvents>
          </div>
        
        
        </Router>
      );

    }
  }

  
}


export default App;
