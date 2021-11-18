import React, { useState, useEffect } from 'react'

const Planetlist = ({
  setPlanet,
}) => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then((res) => res.json())
      .then(
        (resp) => {
          setPlanets(resp.results)
        },
      )
  }, [])

  return (
    <ul className="">
      {planets.map((planet) => (
        <li
          key={planet.name}
        >
          <div className="desc">
            <h3>{planet.name}</h3>
            <p>{`Diameter: ${planet.diameter}`}</p>
            <p>{planet.terrain}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
export default Planetlist