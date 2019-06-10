import axios from 'axios'

export default function ajax(url, options) {
  return axios(`${BASE_URL}${url}`, options)
}
