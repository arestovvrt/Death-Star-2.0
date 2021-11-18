import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Peoplelist = ({
  setCharacter,
}) => {
  const [people, setPeople] = useState([])
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then(
        (resp) => {
          setPeople(resp.results)
        },
      )
  }, [])

  function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  }

  return (
    <ul className="">
      {people.map((person) => (
        <li 
          key={person.name}
          style={
            { backgroundImage: `url(${imgURL + getId(person.url)}.jpg)` }
            }
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

Peoplelist.propTypes = {
  setCharacter: PropTypes.func.isRequired,
}

export default Peoplelist