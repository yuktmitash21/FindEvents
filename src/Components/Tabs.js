import React, { Component } from 'react'
import './Tabs.css'


//this class holds all the tabs and notifies parent when the user switches tabs
export default class Tabs extends Component {
  render() {
      var arr = this.props.array;
      if (this.props.array.length == 0) {
          return <h3 style={{textAlign:"center"}}>Please select one or more categories</h3>
      }
    return (
      <div className="Tabs">
     
     {React.Children.map(this.props.children, (child, i) => {
         let className = `Tabs__Tab`;
         if (child.key === this.props.active) {
           className = `${className} Tabs__Tab--active`;
         }
         return (
             <div className = {className}
             onClick = {() => {
                // notify parent when tab is switched
                 this.props.onChange(child.key)

             }}
             
             >
                {child}
             </div>
         )
     })

     }
          

      
        
      </div>
    )
  }
}
