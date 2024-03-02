// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {FirstNameHide: false, LastNameHide: false}

  FirstnameShoworHide = () => {
    const {FirstNameHide} = this.state

    if (FirstNameHide) {
      this.setState({FirstNameHide: false})
    } else {
      this.setState({FirstNameHide: true})
    }

    // console.log(FirstNameHide)
  }

  LastName = () => {
    const {LastNameHide} = this.state

    if (LastNameHide) {
      this.setState({LastNameHide: false})
    } else {
      this.setState({LastNameHide: true})
    }
  }

  renderLastName = () => {
    const {LastNameHide} = this.state
    let display
    if (LastNameHide) {
      display = (
        <div className="name-container">
          <p>Jonas</p>
        </div>
      )
    } else {
      // hide
    }
    return display
  }

  renderShowHideFirstName = () => {
    const {FirstNameHide} = this.state
    let shown
    if (FirstNameHide) {
      shown = (
        <div className="name-container">
          <p>Joe</p>
        </div>
      )
    } else {
      console.log('FirstName Hide')
    }
    return shown
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="buttons-container">
          <div>
            <button
              type="button"
              className="btn-custom-1"
              onClick={this.FirstnameShoworHide}
            >
              Show/Hide Firstname
            </button>
            {this.renderShowHideFirstName()}
          </div>
          <div>
            <button
              type="button"
              onClick={this.LastName}
              className="btn-custom-2"
            >
              Show/Hide Lastname
            </button>
            {this.renderLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
