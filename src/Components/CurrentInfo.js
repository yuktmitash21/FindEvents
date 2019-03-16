import React, { Component } from 'react'

export default class CurrentInfo extends Component {
  render() {
      console.log(this.props.act)
    return (
      <div>
        <h1>{this.props.act}</h1>
      </div>
    )
  }
}
