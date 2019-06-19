import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useLocations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios
      .post('https://faheemapp.com/api-server/api/search/locations', {
        api_key_val: 1
      })
      .then(({ data }) => setLocations(data))
      .catch(error => console.log(error))
  }, [])

  return locations
}
