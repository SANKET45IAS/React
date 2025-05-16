import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
  const {id}=useParams();
  return (
    <>
 <h1>Params: {id}</h1>
    </>
  )
}

export default ParamComp