// import { initialize } from '@iterable/web-sdk';
import React, { Component } from 'react';
import Button from './Button'
import Input from './Input'
import '../Styles.css';
const api_key = process.env.REACT_APP_API_KEY
const secret_code = process.env.REACT_APP_SECRET_CODE

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      email: '',
      id: '',
    }
    this.createProfile = this.createProfile.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.buttonDisabled = this.buttonDisabled.bind(this)
  }

  handleInput(e) {
    let firstName = e.target.value
    this.setState({ firstName })
  }


  createProfile(props) {
    alert(api_key)
    alert(secret_code)
    this.setState({firstName: '', email: '', id: ''})

  }

  renderProfile() {
    return this.state.firstName
  }

  buttonDisabled() {
    return !this.state.firstName
    return !this.state.email
  }

  render() {
    return (
      <div className='App'>
        <Input
          value={this.state.firstName}
          handleInput={this.handleInput}
          placeholder='Email Address'
        />
        <Button
          className='createProfile'
          text='Create Profile'
          handleClick={this.createProfile}
          buttonDisabled={this.buttonDisabled}
        />
      </div>
    )
  }


}

export default App
