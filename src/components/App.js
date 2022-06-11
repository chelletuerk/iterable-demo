// import { initialize } from '@iterable/web-sdk';
import React, { Component} from 'react';
import Button from './Button'
import Input from './Input'
import '../Styles.css';
const api_key = process.env.REACT_APP_API_KEY
const secret_code = process.env.REACT_APP_SECRET_CODE
const axios = require('axios').default;

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      email: '',
      id: '',
    }
    this.createProfile = this.createProfile.bind(this)
    this.handleFirstNameInput = this.handleFirstNameInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
  }

  handleFirstNameInput(e) {
    let firstName = e.target.value
    this.setState({ firstName: firstName })
  }

  handleEmailInput(e) {
    let email = e.target.value
    this.setState({ email: email })
  }

  createProfile(e) {
    e.preventDefault()


  //////////////////////////////////AXIOS CALLS
  /////POST REQUEST
  const myHeaders = new Headers();
  let id = Math.random().toString(16).slice(2)
  myHeaders.append("API_KEY", api_key);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "XSRF-TOKEN=ed48f338cb3ffdafd90a60dc4cb459194ebed825-1654666467237-b45da4c5d930d385a89ca38a");

  const data = JSON.stringify({
    "email": this.state.email,
    "dataFields": {
      "firstName": this.state.firstName,
      "isWebUser": true,
      "SA_WebUser_Test_Key": "completed"
    },
    "userId": id,
    })

  let config = {
    method: 'post',
    url: 'https://api.iterable.com/api/users/update',
    headers: {
      'API_KEY': api_key,
      'Content-Type': 'application/json',
      'Cookie': 'XSRF-TOKEN=ed48f338cb3ffdafd90a60dc4cb459194ebed825-1654666467237-b45da4c5d930d385a89ca38a'
    },
    data : data
    }
  axios(config)

  .then(function (response) {
    console.log('RESPONSE', response)
  let responseCode = response.data
  console.log(JSON.stringify(response.data))
    if (responseCode.code === "Success") {
      alert(JSON.stringify(responseCode.code))
    //   userList.append(`You've successfully created a profile for ${email}.`)
    //     document.querySelector('input#email-input').style.backgroundColor = "#fff"
    }
  })

  .catch((error) => {
      if( error.response ){
          if(error.response.data.code === "InvalidEmailAddressError") {
            alert(JSON.stringify(error.response.data.code))
          //   document.querySelector('input#email-input').style.backgroundColor = "#fac090"
          //   userList.append(html.text)
          }
      }
  })

    this.renderProfile(this.state.email)
    console.log(this.state.email)
    this.setState({firstName: '', email: ''})
    return this.state.email
  }

  // handleKeyPress(e) {
  //   if (e.key === 'Enter') {
  //     e.preventDefault()
  //     this.createProfile()
  //   }
  // }

  renderProfile() {
    // alert('hit')
    return <li>{this.state.firstName}</li>
  }

  // buttonDisabled() {
  //   return !this.state.firstName
  //   return !this.state.email
  // }

  render() {
    return (
      <div className='App'>
        <Input
          value={this.state.firstName}
          handleInput={this.handleFirstNameInput}
          placeholder='First Name'
          onKeyPress={(e) => e.key === 'Enter' && this.createProfile()}
        />
        <Input
          value={this.state.email}
          handleInput={this.handleEmailInput}
          placeholder='Email Address'
          onKeyPress={(e) => e.key === 'Enter' && this.createProfile()}
        />
        <Button
          className='createProfile'
          text='Create Profile'
          handleClick={this.createProfile}
          buttonDisabled={this.buttonDisabled}
        />
       <h2>{this.state.firstName}</h2>
       <h2>{this.state.email}</h2>
      </div>
    )
  }
}

export default App
