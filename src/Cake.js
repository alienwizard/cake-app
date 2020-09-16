import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CakeContext } from './App'
import './styles/cake.css'

function CakeDetails(prop) {
  const cakeDetail = useContext(CakeContext)
  useEffect(() => {
    console.log('new cake detail', cakeDetail)
  }, [cakeDetail])
  return <span>{cakeDetail}</span>
}

export default function Cake({ calories, name }) {
  const [likes, increaseLikes] = useState(0)

  return (
    <div className="cake">
      <h2>
        I am a {name} cake with: {calories} calories
      </h2>
      <CakeDetails />
      <p>I like this cake this much: {likes}</p>
      <button onClick={() => increaseLikes(likes + 1)} type="button">
        Like
      </button>
    </div>
  )
}

Cake.propTypes = {
  calories: PropTypes.number,
  name: PropTypes.string,
}
