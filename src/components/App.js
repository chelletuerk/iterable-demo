import React, { Component} from 'react';
import Button from './Button';
import Input from './Input';
import HTMLembed from './HTMLembed';
import './assets/Styles.css';
const axios = require('axios').default;
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

    /////CREATE PROFILE POST REQUEST
    const myHeaders = new Headers()
    let id = Math.random().toString(16).slice(2)
    myHeaders.append('API_KEY', api_key)
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Cookie', 'XSRF-TOKEN=ed48f338cb3ffdafd90a60dc4cb459194ebed825-1654666467237-b45da4c5d930d385a89ca38a')

    const data = JSON.stringify({
      'email': this.state.email,
      'dataFields': {
        'firstName': this.state.firstName,
        'isWebUser': true,
        'SA_WebUser_Test_Key': 'completed'
      },
      'userId': id,
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

    .then((response) => {
      let responseCode = response.data
      if (responseCode.code === 'Success') {
        alert(JSON.stringify(responseCode.code))
      }
    })

    .catch((error) => {
      if( error.response ){
        if(error.response.data.code === 'InvalidEmailAddressError') {
          alert(JSON.stringify(error.response.data.code))
        }
      }
    })
    this.setState({firstName: '', email: ''})
    return this.state.email
  }

  createEvent(e) {
    let id = Math.random().toString(16).slice(2)
    e.preventDefault()

    /////CREATE PROFILE POST REQUEST
    const data = JSON.stringify({
      'email': 'michelletuerk4@gmail.com',
      'eventName': 'webSATestEvent',
      'dataFields': {
        'platform': 'web',
        'isTestEvent': true,
        'url': ' https://iterable.com/sa-test/Chelle',
        'secret_code_key': secret_code
      },
      'userId': id
    })

    let config = {
      method: 'post',
      url: 'https://api.iterable.com/api/events/track',
      headers: {
        'API_KEY': api_key,
        'Content-Type': 'application/json'
      },
      data : data
    }

    axios(config)
    .then((response) => {
      alert(JSON.stringify(response.data.code)
      + ' Event id: ' + JSON.stringify(response.data.params.id))
    })
    .catch((error) => {
      alert(error)
    })
  }

  /////GET HTML REQUEST
  getMessages(e) {
    var axios = require('axios')
    var data = JSON.stringify({
    'email': 'michelletuerk@gmail.com',
    'dataFields': {
        'firstName': 'Chelle',
        'isWebUser': true,
        'SA_WebUser_Test_Key': 'completed'
    },
    'userId': '22'
    })

    var config = {
    method: 'get',
    url: 'https://api.iterable.com/api/inApp/getMessages?email=michelletuerk@gmail.com&userId=michelletuerk@gmail.com&API_KEY=' + api_key + '&count=5',
    headers: {
        'API_KEY': api_key,
        'Content-Type': 'application/json'
    },
    data : data
    }

    axios(config)
    .then((response) => {
      console.log(response)
      response.data.inAppMessages.map((e) => console.log(e.content.html))
    })
    //Not yet working///
    // .then((response) => {
    //   if (response.data.inAppMessages === []) {
    //     alert('hit')
    //     alert('You have no unread messages')
    //   }
    // })
    .catch((error) => {
      alert(error)
    })
  }

  render() {
    return (
      <div className='App'>
      <div className='bg-image'></div>
      <div className='form-container'>
          <div>
              <Input
               className='first-name'
                value={this.state.firstName}
                handleInput={this.handleFirstNameInput}
                placeholder='First Name'
                onKeyPress={(e) => e.key === 'Enter' && this.createProfile()}
              />
              <Input
                className='email'
                value={this.state.email}
                handleInput={this.handleEmailInput}
                placeholder='Email Address'
                onKeyPress={(e) => e.key === 'Enter' && this.createProfile()}
              />
            </div>
              <Button
                className='create-profile-btn'
                text='Create Profile'
                handleClick={this.createProfile}
              />
            <div className='events-messages-container'>
              <Button
                className='create-event-btn'
                text='Create Event'
                handleClick={this.createEvent}
              />
              <Button
                className='get-messages-btn'
                text='Get Messages'
                handleClick={this.getMessages}
              />
          </div>
        </div>
          <HTMLembed
            className='embed'
          />
      </div>
    )
  }
}

export default App
