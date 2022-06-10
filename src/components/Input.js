import React from 'react'

const Input = (props) => {
  return(
  <input
    className={props.className}
    value={props.value}
    onChange={props.handleInput}
    placeholder={props.placeholder}>{props.text}
  </input>
  )
}

export default Input
