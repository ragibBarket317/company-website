import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.mytechcompany.com', // replace later
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
