import FilmsService from '@/services/FilmsService'

describe('Quando o método getAllFilms for chamado', () => {

  it('Deve retornar todas as propriedades corretamente', async () => {
    var service = new FilmsService()
    var response = await service.getAllFilms()
    var filme = response.data.results[0]

    expect(filme).toHaveProperty('title')
    expect(filme).toHaveProperty('opening_crawl')
    expect(filme).toHaveProperty('director')
    expect(filme).toHaveProperty('producer')
    expect(filme).toHaveProperty('release_date')
    expect(filme).toHaveProperty('characters')
    expect(filme).toHaveProperty('planets')
    expect(filme).toHaveProperty('starships')
  })
})

describe('Quando o método getAllFilms for chamado', () => {

  it('Deve retornar todas as propriedades corretamente', async () => {
    const idFilme = 1
    var service = new FilmsService()
    var response = await service.getFilmeById(idFilme)
    var filme = response.data

    expect(filme).toHaveProperty('title')
    expect(filme).toHaveProperty('opening_crawl')
    expect(filme).toHaveProperty('director')
    expect(filme).toHaveProperty('producer')
    expect(filme).toHaveProperty('release_date')
    expect(filme).toHaveProperty('characters')
    expect(filme).toHaveProperty('planets')
    expect(filme).toHaveProperty('starships')
  })
})
