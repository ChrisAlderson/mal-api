'use strict'

const { expect } = require('chai')
const MalAPI = require('../mal-api')

describe('MyAnimeList', () => {

  let mal, animeQuery, animeId, animeData, mangaQuery, mangaId, mangaData, responses

  before(() => {
    console.warn = () => {}
    mal = new MalAPI(
      process.env.MAL_USER,
      process.env.MAL_PASS,
      true
    )

    animeQuery = 'naruto'
    animeId = 21
    animeData = {
      score: 10
    }

    mangaQuery = 'naruto'
    mangaId = 1535
    mangaData = {
      score: 10
    }

    responses = {
      CREATED: 'Created',
      UPDATED: 'Updated',
      DELETED: 'Deleted'
    }
  })

  it('verifyCredentials', done => {
    mal.account.verifyCredentials().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('searchAnime', done => {
    mal.anime.searchAnime(animeQuery).then(res => {
      expect(res).to.be.an('array')
      expect(res.length).to.be.at.least(1)

      done()
    }).catch(done)
  })

  it('addAnime', done => {
    mal.anime.addAnime(animeId, animeData).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.CREATED)

      done()
    }).catch(done)
  })

  it('updateAnime', done => {
    mal.anime.updateAnime(animeId, animeData).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.UPDATED)

      done()
    }).catch(done)
  })

  it('deleteAnime', done => {
    mal.anime.deleteAnime(animeId).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.DELETED)

      done()
    }).catch(done)
  })

  it('searchManga', done => {
    mal.manga.searchManga(mangaQuery).then(res => {
      expect(res).to.be.an('array')
      expect(res.length).to.be.at.least(1)

      done()
    }).catch(done)
  })

  it('addManga', done => {
    mal.manga.addManga(mangaId, mangaData).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.CREATED)

      done()
    }).catch(done)
  })

  it('updateManga', done => {
    mal.manga.updateManga(mangaId, mangaData).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.UPDATED)

      done()
    }).catch(done)
  })

  it('deleteManga', done => {
    mal.manga.deleteManga(mangaId).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.DELETED)

      done()
    }).catch(done)
  })
})
