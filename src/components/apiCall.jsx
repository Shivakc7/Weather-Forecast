import axios from 'axios'

const baseUrls = 'https://api.openweathermap.org/data/2.5/weather?'

const apiCall = async(cityName) => {
  try {
    const {data} = await axios.get(baseUrls + `q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    return data
  } catch (error) {
    throw error
  }
}

export default apiCall