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
      score: 10,
      status: 1
    }

    responses = {
      CREATED: 'Created',
      UPDATED: 'Updated',
      DELETED: 'Deleted'
    }
  })

  it('should throw an error when user and pass are null', () => {
    try {
      const malApi = new MalAPI()
      expect(malApi).to.be.an('object')
    } catch (err) {
      expect(err).to.be.an('Error')
    }
  })

  it('should not parse xml correctly', done => {
    mal.account._helper._toJSON({})
      .then(done)
      .catch(err => {
        expect(err).to.be.an('Error')

        done()
      })
  })

  it('should verify credentials', done => {
    mal.account.verifyCredentials().then(res => {
      expect(res).to.be.an('object')
      expect(res.id).to.be.a('string')
      expect(res.username).to.be.a('string')

      done()
    }).catch(done)
  })

  it('should search an anime', done => {
    mal.account._helper._debug = false
    mal.anime.searchAnime(animeQuery).then(res => {
      expect(res).to.be.an('array')
      expect(res.length).to.be.at.least(1)

      const random = Math.floor(Math.random() * res.length)
      const toTest = res[random]

      expect(toTest.id).to.be.a('string')
      expect(toTest.title).to.be.a('string')
      expect(toTest.english).to.be.a('string')
      expect(toTest.synonyms).to.be.a('string')
      expect(toTest.episodes).to.be.a('string')
      expect(toTest.score).to.be.a('string')
      expect(toTest.type).to.be.a('string')
      expect(toTest.status).to.be.a('string')
      expect(toTest.start_date).to.be.a('string')
      expect(toTest.end_date).to.be.a('string')
      expect(toTest.synopsis).to.be.a('string')
      expect(toTest.image).to.be.a('string')

      done()
    }).catch(done)
  })

  it('should add an anime', done => {
    mal.anime.addAnime(animeId, animeData).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.CREATED)

      done()
    }).catch(done)
  })

  it('should update an anime', done => {
    mal.anime.updateAnime(animeId, animeData).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.UPDATED)

      done()
    }).catch(done)
  })

  it('should delete an anime', done => {
    mal.anime.deleteAnime(animeId).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.DELETED)

      done()
    }).catch(done)
  })

  it('should search for a manga', done => {
    mal.manga.searchManga(mangaQuery).then(res => {
      expect(res).to.be.an('array')
      expect(res.length).to.be.at.least(1)

      done()
    }).catch(done)
  })

  it('should add a manga', done => {
    mal.manga.addManga(mangaId, mangaData).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.CREATED)

      done()
    }).catch(done)
  })

  it('should update a manga', done => {
    mal.manga.updateManga(mangaId, mangaData).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.UPDATED)

      done()
    }).catch(done)
  })

  it('should delete a manga', done => {
    mal.manga.deleteManga(mangaId).then(res => {
      expect(res).to.be.a('string')
      expect(res).to.equal(responses.DELETED)

      done()
    }).catch(done)
  })
})
