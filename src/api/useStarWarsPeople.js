import { useEffect, useState } from 'react'

export default function useStarWarsPeople() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then(({results}) => setPeople(results))
  }, [])

  console.log('fetch result', people)
  return people
}
