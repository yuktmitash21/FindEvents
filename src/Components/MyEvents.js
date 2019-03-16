import React, {Component} from 'react'; 
import './MyEvents.css'


/*I apologize for messy code. This was a time crunch. Kept track of three different lists
and current tab. This allows user to switch between tabs without the website making abother json
request*/
class MyEvents extends Component {

    //separate list for each tab
   state = {
       event: [],
       bigList1 : [],
       bigList2: [],
       bigList3: []
   }

   //constructor grabs event array and tab numer from abother component
    constructor(props) {
        super(props);
        this.event= this.props.event;
        this.number = this.props.number;
    }

    //chooses between three separate categories based on current tab
    componentDidMount() {
        var eventArr = this.props.event;
        var num = this.number;
          
       if (eventArr.length >=1) {  
           console.log(eventArr[0]);
            var id = eventArr[0].id;
            var getString = "https://www.eventbriteapi.com/v3/events/search/?categories=" + id + "&token=EQIJG4NJLSY55SDEOOQB";
            console.log(getString);

            fetch(getString).then(res => res.json())
            .then(json => {
           this.setState({bigList1: json.events})
      
     
    })
}

if (eventArr.length  >= 2) {
    var id = eventArr[1].id;
            var getString = "https://www.eventbriteapi.com/v3/events/search/?categories=" + id + "&token=EQIJG4NJLSY55SDEOOQB";
            console.log(getString);

            fetch(getString).then(res => res.json())
            .then(json => {
           this.setState({bigList2: json.events})
      
     
    })
}

if (eventArr.length  >= 3) {
    var id = eventArr[2].id;
            var getString = "https://www.eventbriteapi.com/v3/events/search/?categories=" + id + "&token=EQIJG4NJLSY55SDEOOQB";
            console.log(getString);

            fetch(getString).then(res => res.json())
            .then(json => {
           this.setState({bigList3: json.events})
      
     
    })
        


    }
}




    /*if the current tab is not connected to an even type return nothing otherwise iterate
    through and return proper array*/ 
    render() {
        if (this.state.bigList1 == null && this.state.number == 0) {
        return (
            <div>
                <h3 style={{textAlign:"center"}}>No events available :(</h3>

            </div>


        ) 
        } else if (this.state.bigList2 == null && this.state.number == 1) {
            return (
                <div>
                    <h3 style={{textAlign:"center"}}>No events available :(</h3>
    
                </div>
    
    
            ) 

        
        } else if ((this.state.bigList3 == null && this.state.number == 2) ) {
            return (
                <div>
                    <h3 style={{textAlign:"center"}}>No events available :(</h3>
    
                </div>
    
    
            ) 
        } else {
            var num = this.props.number;
            var myList;
            if ( num == 0) {
                console.log(this.state.bigList1);
                myList = this.state.bigList1;


            } else if (num == 1) {
                console.log(this.state.bigList2);
                myList = this.state.bigList2;
            } else {
                console.log(this.state.bigList3);
                myList = this.state.bigList3;

            }

            const events = myList.map((event, index)=> {
                //name, description, vanity_url,
                
                var url;
                if (event.logo == null) {
                    url =event.url;
                } else {
                    url = event.logo.url;
                }
        
                console.log(event.name.text);
                return (
                    <div className="card">
                    <img style={{height: '80%', width: '100%'}} src = {url}></img>
                   <a href={event.vanity_url} style={{width:'110%', paddingRight:'-70px'}}> {event.name.text}</a>
                   
                   </div>

                );

            });
            return (
                <div className="container">
                {events}

                </div>
            )


          
    
        }
    
    }

}

export default MyEvents;