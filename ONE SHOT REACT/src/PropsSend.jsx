import React from 'react'
import { PropsExample } from './PropsExample'
let Details=[
  {
    "name": "Sanket Sidhivinayak",
    "redg": "CSE2023001",
    "age": 20,
    "gender": "Male"
  },
  {
    "name": "Ananya Mishra",
    "redg": "CSE2023002",
    "age": 19,
    "gender": "Female"
  },
  {
    "name": "Rahul Singh",
    "redg": "CSE2023003",
    "age": 21,
    "gender": "Male"
  },
  {
    "name": "Pooja Rani",
    "redg": "CSE2023004",
    "age": 20,
    "gender": "Female"
  },
  {
    "name": "Amit Kumar",
    "redg": "CSE2023005",
    "age": 22,
    "gender": "Male"
  }
]

export const PropsSend = () => {
    return (
      <>
        {Details.map((item, index) => (
          <PropsExample
            key={index}
            name={item.name}
            redg={item.redg}
            age={item.age}
            gender={item.gender}
          />
        ))}
      </>
    );
  };
  