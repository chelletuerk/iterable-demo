// import { initialize } from '@iterable/web-sdk';
import React, { Component} from 'react';
import Button from './Button'
import Input from './Input'
import Iframe from './Iframe'
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
    this.createEvent = this.createEvent.bind(this)
    this.getMessages = this.getMessages.bind(this)
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
    //////////////////////////////////AXIOS CALL
    /////CREATE PROFILE POST REQUEST
    const myHeaders = new Headers();
    let id = Math.random().toString(16).slice(2)
    myHeaders.append("API_KEY", api_key)
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Cookie", "XSRF-TOKEN=ed48f338cb3ffdafd90a60dc4cb459194ebed825-1654666467237-b45da4c5d930d385a89ca38a")

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
      console.log(JSON.stringify(response.data))
      let responseCode = response.data
      if (responseCode.code === "Success") {
        alert(JSON.stringify(responseCode.code))
      }
    })

    .catch((error) => {
      if( error.response ){
        if(error.response.data.code === "InvalidEmailAddressError") {
          alert(JSON.stringify(error.response.data.code))
        }
      }
    })
    console.log(this.state.email)
    this.setState({firstName: '', email: ''})
    return this.state.email
  }

  createEvent(e) {
    let id = Math.random().toString(16).slice(2)
    e.preventDefault()
    //////////////////////////////////AXIOS CALL
    /////CREATE PROFILE POST REQUEST
    const data = JSON.stringify({
      "email": "michelletuerk4@gmail.com",
      "eventName": "webSATestEvent",
      "dataFields": {
        "platform": "web",
        "isTestEvent": true,
        "url": " https://iterable.com/sa-test/Chelle",
        "secret_code_key": secret_code
      },
      "userId": id
    });

    let config = {
      method: 'post',
      url: 'https://api.iterable.com/api/events/track',
      headers: {
        'API_KEY': api_key,
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      alert(JSON.stringify(response.data.code) + ' Event id: ' + JSON.stringify(response.data.params.id))
    })
    .catch(function (error) {
      alert(error)
    })
  }

  //////////////////////////////////AXIOS CALL
  /////CREATE PROFILE POST REQUEST
  getMessages(e) {
    var axios = require('axios');
    var data = JSON.stringify({
    "email": "michelletuerk@gmail.com",
    "dataFields": {
        "firstName": "Chelle",
        "isWebUser": true,
        "SA_WebUser_Test_Key": "completed"
    },
    "userId": "22"
    });

    var config = {
    method: 'get',
    url: 'https://api.iterable.com/api/inApp/getMessages?email=michelletuerk@gmail.com&userId=michelletuerk@gmail.com&API_KEY=' + api_key + '&count=5',
    headers: {
        'API_KEY': api_key,
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
      response.data.inAppMessages.map((e) => console.log(e.content.html))
      // console.log(JSON.stringify(response.data.inAppMessages))
    })
    .catch(function (error) {
      alert(error)
    })
  }

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
        <Button
          className='createEvent'
          text='Create Event'
          handleClick={this.createEvent}
          buttonDisabled={this.buttonDisabled}
        />
        <Button
          className='getMessages'
          text='Get Messages'
          handleClick={this.getMessages}
          buttonDisabled={this.buttonDisabled}
        />
        <Iframe />
       <h2>{this.state.firstName}</h2>
       <h2>{this.state.email}</h2>
      </div>
    )
  }
}

export default App
