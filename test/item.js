'use strict'

// Import the necessary modules.
const { expect } = require('chai')
const MalApi = require('../mal-api')

/** @test {Item} */
describe('Item', () => {
  let mal, responses

  /**
   * Hook for setting up the Item tests.
   * @type {Function}
   */
  before(() => {
    // Disable the warn logging function to testing.
    console.warn = () => {}

    responses = {
      CREATED: 'Created',
      UPDATED: 'Updated',
      DELETED: 'Deleted'
    }
  })

  /** @test {Anime} */
  describe('Anime', () => {
    let animeQuery, animeId, animeData

    /**
     * Hook for setting up the Anime tests.
     * @type {Function}
     */
    before(() => {
      mal = new MalApi(
        process.env.MAL_USER,
        process.env.MAL_PASS,
        true
      )

      animeQuery = 'naruto'
      animeId = 21
      animeData = {
        score: 10
      }
    })

    /** @test {Anime#searchAnime} */
    it('should search an anime', done => {
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

    /** @test {Anime#addAnime} */
    it('should add an anime', done => {
      mal.anime.addAnime(animeId, animeData).then(res => {
        expect(res).to.be.a('string')
        expect(res).to.equal(responses.CREATED)

        done()
      }).catch(done)
    })

    /** @test {Anime#updateAnime} */
    it('should update an anime', done => {
      mal.anime.updateAnime(animeId, animeData).then(res => {
        expect(res).to.be.a('string')
        expect(res).to.equal(responses.UPDATED)

        done()
      }).catch(done)
    })

    /** @test {Anime#deleteAnime} */
    it('should delete an anime', done => {
      mal.anime.deleteAnime(animeId).then(res => {
        expect(res).to.be.a('string')
        expect(res).to.equal(responses.DELETED)

        done()
      }).catch(done)
    })
  })

  /** @test {Manga} */
  describe('Manga', () => {
    let mangaQuery, mangaId, mangaData

    /**
     * Hook for setting up the Manga tests.
     * @type {Function}
     */
    before(() => {
      mal = new MalApi(
        process.env.MAL_USER,
        process.env.MAL_PASS,
        false
      )

      mangaQuery = 'naruto'
      mangaId = 1535
      mangaData = {
        score: 10,
        status: 1
      }
    })

    /** @test {Manga#searchManga} */
    it('should search for a manga', done => {
      mal.manga.searchManga(mangaQuery).then(res => {
        expect(res).to.be.an('array')
        expect(res.length).to.be.at.least(1)

        done()
      }).catch(done)
    })

    /** @test {Manga#addManga} */
    it('should add a manga', done => {
      mal.manga.addManga(mangaId, mangaData).then(res => {
        expect(res).to.be.a('string')
        expect(res).to.equal(responses.CREATED)

        done()
      }).catch(done)
    })

    /** @test {Manga#updateManga} */
    it('should update a manga', done => {
      mal.manga.updateManga(mangaId, mangaData).then(res => {
        expect(res).to.be.a('string')
        expect(res).to.equal(responses.UPDATED)

        done()
      }).catch(done)
    })

    /** @test {Manga#deleteManga} */
    it('should delete a manga', done => {
      mal.manga.deleteManga(mangaId).then(res => {
        expect(res).to.be.a('string')
        expect(res).to.equal(responses.DELETED)

        done()
      }).catch(done)
    })
  })
})
