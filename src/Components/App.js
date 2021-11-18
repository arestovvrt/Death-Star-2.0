import React, { useState } from 'react'
import PlanetsList from './PlanetList'
import PeopleList from './PeopleList'


export default function App() {
  const [peopleId, setCharacter] = useState(null)
  const [planetId, setPlanet] = useState(null)

  return (
    <div className="container">
      <h1 className="text-center">SW API</h1>
          <>
            <h2>People</h2>
            <div className="horizontal-list">
              <PeopleList setCharacter={setCharacter} />
            </div>
            <h2>Planets</h2>
            <div className="vertical-list">
              <PlanetsList setPlanet={setPlanet} />
            </div>
          </>
    </div>
  )
}