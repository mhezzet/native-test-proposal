import React, { useState } from 'react'
import Landing from './screens/Landing'
import Tutors from './screens/Tutors'
import useLocations from './hooks/useLocations'
import useTutors from './hooks/useTutors'

export default function App() {
  const [screen, setScreen] = useState('landing')
  const [city, setCity] = useState('')
  const [searchField, setSearchField] = useState('')
  const locations = useLocations()
  const tutors = useTutors({ city, searchField })

  return (
    <>
      {screen === 'landing' && (
        <Landing
          setScreen={setScreen}
          city={city}
          setCity={setCity}
          locations={locations}
          searchField={searchField}
          setSearchField={setSearchField}
        />
      )}
      {screen === 'tutors' && (
        <Tutors
          setScreen={setScreen}
          city={city}
          setCity={setCity}
          locations={locations}
          searchField={searchField}
          setSearchField={setSearchField}
          tutors={tutors}
        />
      )}
    </>
  )
}
