// import { initialize } from '@iterable/web-sdk';
import React, { Component} from 'react';
import Button from './Button'
import Input from './Input'
import '../Styles.css';
const api_key = process.env.REACT_APP_API_KEY
const secret_code = process.env.REACT_APP_SECRET_CODE
const axios = require('axios').default;
console.log(api_key)
console.log(secret_code)

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      setFirstName: '',
      email: '',
      id: '',
    }
    this.createProfile = this.createProfile.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    let firstName = e.target.value
    this.setState({ firstName: firstName })
  }

  createProfile(e) {
    e.preventDefault()


  //////////////////////////////////AXIOS CALLS
  /////POST REQUEST
  const myHeaders = new Headers();
  myHeaders.append("API_KEY", "349dcc9373c74c6699c5d1204a271695");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "XSRF-TOKEN=ed48f338cb3ffdafd90a60dc4cb459194ebed825-1654666467237-b45da4c5d930d385a89ca38a");

  const data = JSON.stringify({
    "email": this.state.firstName,
    "dataFields": {
      "firstName": 'Chelle43',
      "isWebUser": true,
      "SA_WebUser_Test_Key": "completed"
    },
    "userId": '43',
    })

  let config = {
    method: 'post',
    url: 'https://api.iterable.com/api/users/update',
    headers: {
      'API_KEY': '349dcc9373c74c6699c5d1204a271695',
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
      alert('success')
    //   userList.append(`You've successfully created a profile for ${firstName}.`)
    //     document.querySelector('input#email-input').style.backgroundColor = "#fff"
    }
  })

  .catch((error) => {
      if( error.response ){
        alert(JSON.stringify(error.response.data))
          // if(error.response.data.code === "InvalidEmailAddressError") {
          //   document.querySelector('input#email-input').style.backgroundColor = "#fac090"
          //   userList.append(html.text)
          // }
      }
  })

    this.renderProfile(this.state.firstName)
    console.log(this.state.firstName)
    this.setState({firstName: ''})
    return this.state.firstName
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
          handleInput={this.handleInput}
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
      </div>
    )
  }


}

export default App
