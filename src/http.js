import axios from 'axios'

export default class Http {

  constructor() {
    this.config =
    {
      url: 'https://swapi.co/api/',
      mode: 'no-cors'
    }
  }

  request(urlRoute) {
    this.config.url += urlRoute
    return axios(this.config)
  }
}
