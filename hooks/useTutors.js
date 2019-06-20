import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useTutors({ searchField, city }) {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    axios
      .get('https://evening-peak-27669.herokuapp.com/')
      .then(({ data }) => setTutors(data))
  }, [])

  let flag = false

  const filtered = tutors.filter(tutor => {
    tutor.subjects.forEach(subject => {
      subject.keywords.forEach(keyword => {
        if (keyword.includes(searchField) && subject.location_name === city)
          flag = true
      })
    })
    let flag2 = flag
    flag = false
    return flag2
  })

  return filtered
}
