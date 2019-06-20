import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useTutors({ searchField, city }) {
  const [tutors, setTutors] = useState([])

  console.log(searchField)
  console.log(city)

  useEffect(() => {
    axios
      .get('https://evening-peak-27669.herokuapp.com/')
      .then(({ data }) => setTutors(data))
  }, [])

  // let flag = false

  // tutors.filter(tutor => {
  //   tutor.subjects.forEach(subject => {
  //     if (subject.location_name === city) flag = true
  //     subject.keywords.forEach(keyword => {
  //       console.log(keyword === searchField)
  //       if (keyword === searchField) flag = true
  //     })
  //   })
  //   let flag2 = flag
  //   flag = false
  //   return flag2
  // })

  return tutors
}
