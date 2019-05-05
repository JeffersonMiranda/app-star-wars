import Http from '@/http'

export default class FilmsService {

  constructor() {
    this.http = new Http()
  }

  async getAllFilms() {
    return this.http.request('films/')
  }

  getFilmeById(id) {
    return
  }
}
