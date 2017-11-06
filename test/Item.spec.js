// Import the necessary modules.
const { expect } = require('chai')

const MalApi = require('..')

/** @test {Item} */
describe('Item', () => {
  /**
   * The MalApi instance.
   * @type {MalApi}
   */
  let mal

  /**
   * Object which holds the valid responses for the C*UD options.
   * @type {Object}
   */
  let responses

  /**
   * Hook for setting up the Item tests.
   * @type {Function}
   */
  before(() => {
    responses = {
      CREATED: 'Created',
      UPDATED: 'Updated',
      DELETED: 'Deleted'
    }
  })

  /**
   * Test if an item has certain attributes.
   * @param {Object} item - The item to test.
   * @returns {undefined}
   */
  function testItemAttributes(item) {
    expect(item.id).to.be.a('string')
    expect(item.title).to.be.a('string')
    expect(item.english).to.be.a('string')
    expect(item.synonyms).to.be.a('string')
    expect(item.score).to.be.a('string')
    expect(item.type).to.be.a('string')
    expect(item.status).to.be.a('string')
    expect(item.start_date).to.be.a('string')
    expect(item.end_date).to.be.a('string')
    expect(item.synopsis).to.be.a('string')
    expect(item.image).to.be.a('string')
  }

  /** @test {Anime} */
  describe('Anime', () => {
    /**
     * The anime to search for.
     * @type {string}
     */
    let animeQuery

    /**
     * The id of the anime to execute the CRUD operations.
     * @type {Object}
     */
    let animeId

    /**
     * Data to be send with the C*UD requests.
     * @type {Object}
     */
    let animeData

    /**
     * Hook for setting up the Anime tests.
     * @type {Function}
     */
    before(done => {
      mal = new MalApi({
        username: process.env.MAL_USER,
        password: process.env.MAL_PASS
      })

      animeQuery = 'naruto'
      animeId = 21
      animeData = {
        score: 10
      }

      mal.account.verifyCredentials()
        .then(res => done())
        .catch(done)
    })

    /** @test {Anime#searchAnime} */
    it('should search an anime', done => {
      mal.anime.searchAnime(animeQuery).then(res => {
        expect(res).to.be.an('array')
        expect(res.length).to.be.at.least(1)

        const random = Math.floor(Math.random() * res.length)
        const item = res[random]

        testItemAttributes(item)
        expect(item.episodes).to.be.a('string')

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
    /**
     * The manga to search for.
     * @type {string}
     */
    let mangaQuery

    /**
     * The id of the manga to execute the CRUD operations.
     * @type {Object}
     */
    let mangaId

    /**
     * Data to be send with the C*UD requests.
     * @type {Object}
     */
    let mangaData

    /**
     * Hook for setting up the Manga tests.
     * @type {Function}
     */
    before(done => {
      mal = new MalApi({
        username: process.env.MAL_USER,
        password: process.env.MAL_PASS
      })

      mangaQuery = 'naruto'
      mangaId = 1535
      mangaData = {
        score: 10,
        status: 1
      }

      mal.account.verifyCredentials()
        .then(res => done())
        .catch(done)
    })

    /** @test {Manga#searchManga} */
    it('should search for a manga', done => {
      mal.manga.searchManga(mangaQuery).then(res => {
        expect(res).to.be.an('array')
        expect(res.length).to.be.at.least(1)

        const random = Math.floor(Math.random() * res.length)
        const item = res[random]

        testItemAttributes(item)
        expect(item.chapters).to.be.a('string')
        expect(item.volumes).to.be.a('string')

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
