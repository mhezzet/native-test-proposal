import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useTutors() {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    axios
      .post('https://faheemapp.com/api-server/api/search/tutors', {
        api_key_val: 1,
        student_id: 333,
        lat: 26.236126,
        long: 50.039303
      })
      .then(({ data }) => setTutors(data))
  }, [])

  return tutors
}
