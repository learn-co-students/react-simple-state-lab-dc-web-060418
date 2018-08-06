import React, { Component } from 'react';
export default class Cell extends Component {

  constructor(props) {
    super(props)
    // ...define initial state with a key of 'color' set to the 'value' prop
    this.state = {
      color: this.props.value
    }
    console.log(this.state.color)
  }

  changeColorState = () => (
    this.setState({color: '#333'})
  )

  render() {

    return(
      <div onClick={this.changeColorState} className={"cell"} style={{backgroundColor: this.state.color}} ></div>
    )

  }

}
