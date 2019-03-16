import React from 'react'

export default function about() {
  return (
    <React.Fragment>
        <h1 style = {headerStyle}>About </h1>
        <h4><p style = {paraStyle}>This is an event finding react app for an Eventbrite co-op homework assignnment. v 1.1.3</p></h4>
        <h4><p style = {paraStyle}> Email me at ymitash3@gatech.edu with questions/critiques</p></h4>
        <h4><p style = {paraStyle}>Here is a quick overview of all the pages: Select Events allows the user
        to choose categories of events. After they have chosen 1 or more categories, they may hit Find events
        or navigate to the Find Events tab to search events by categories. This searching is done through HTTP requests to the Eventbrite API.
         They may pick a maximum of 3 event categories. The Find Events By Location page allows the user to enter a zip code and a radius. The website will then make
        HTTP requests to the Google geocoding API and to the Eventbrite API to search for events within the specified range 
        of a zipcode. All events with links to their Eventbrite page will have their links appear on the Find Events or Find Events by Location pages.
        This project was built with 100% react.js with the help of Eventbrite and Google APIs.</p></h4>
        
    </React.Fragment>
  )
}

const headerStyle = {
    textAlign: 'center',
    float:'center',
    padding: '10px'
}

const paraStyle = {
    textAlign: 'center',
    float:'center',
    font:"bold"

}