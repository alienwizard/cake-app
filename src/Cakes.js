import React from 'react'
import useStarWarsPeople from './api/useStarWarsPeople'
import Cake from './Cake'

export default function Cakes() {
  const starWarsPeople = useStarWarsPeople()

  if (starWarsPeople.length) {
    return starWarsPeople.map((person) => {
      console.log(person)
      return (
        <Cake
          key={person.name}
          calories={100}
          name={person.name}
        />
      )
    })
  }

  return <p>Loading...</p>
}
