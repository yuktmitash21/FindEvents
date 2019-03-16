import React, {Component} from 'react';
import './css/EventTypeList.css'
import {Link} from "react-router-dom";
class EventTypeList extends Component {

    //component that contains all the event categories
    constructor(props) {
        super(props);
        this.createList = this.createList.bind(this);
    }

    //using css to differentiate selected and unselected events visually
    createList(items) {
        if (!items.isSelected) {
        return <li id = "selected" onClick= {() => this.select(items.id)}
        key = {items.id}> {items.name}</li>
        } else {
            return <li id = "unselected"  onClick= {() => this.select(items.id)} 
        key = {items.id}> {items.name}</li>

        }

    }

    //climbing up component ladder :(
    select(key) {
       
            this.props.select(key);
        
    }

    //create list of all components and return that followed by a button
    render() {
        var items = this.props.eventTypes;
        
        var myList = items.map(this.createList);

        return (
            <div>
            <ul className="theList">
            {myList}
            </ul>
            <Link to={"/findevents"}><button style={btnStyle}> <h2>Find Events!</h2></button></Link>
            </div>
        )
    }

   
}

//basic styling for button
const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    float: 'center',

    width: '200px',
    height: '100px',
    cursor: 'pointer',
    float: 'right'

}

export default EventTypeList;