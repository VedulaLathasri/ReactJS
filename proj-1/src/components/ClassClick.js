import React, { Component } from 'react'

class ClassClick extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      first
    //   }
    // }
    clickHandler() {
        console.log('Clicked the button');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick