import axios from 'axios'

const API_URL =
'http://localhost:3000/api'

let getUsuarios = () => {
  return axios.get(`${API_URL}/usuarios`)
}

export {
  getUsuarios
}
