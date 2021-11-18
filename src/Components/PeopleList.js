import React, { useState, useEffect } from 'react'

const Peoplelist = ({
  setCharacter,
}) => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then(
        (resp) => {
          setPeople(resp.results)
        },
      )
  }, [])

 

  return (
    <ul className="">
      {people.map((person) => (
        <li 
          key={person.name}
         >
            <div className="desc">
              <h3>{person.name}</h3>
              <p>{`Birth Year: ${person.birth_year}`}</p>
              <p>{`Gender: ${person.gender}`}</p>
              <p>{`Height: ${person.height}`}</p>
              <p>{`Mass: ${person.mass}`}</p>
            </div>    
        </li>
      ))}
    </ul>
  )
}

export default Peoplelist