import React from 'react'

export const PropsExample = (props) => {
  console.log(props);
  return (
    <><h1>Hi, Master {props.name}</h1>
    <h2>Registration Number : {props.redg} </h2>
    <h3>Age : {props.age} , Gender : {props.gender}</h3>
    </>
  )
}
