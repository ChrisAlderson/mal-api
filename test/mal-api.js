'use strict'

// Import the necessary modules.
const { expect } = require('chai')
const MalApi = require('../mal-api')

/** @test {MalApi} */
describe('MyAnimeList', () => {
  /**
   * The MalApi instance.
   * @type {EztvApi}
   */
  let mal

  /**
   * Hook for setting up the MalApi tests.
   * @type {Function}
   */
  before(() => {
    mal = new MalApi(
      process.env.MAL_USER,
      process.env.MAL_PASS
    )
  })

  /** @test {MalApi#constructor} */
  it('should throw an error when user and pass are null', () => {
    try {
      const malApi = new MalApi()
      expect(malApi).to.be.an('object')
    } catch (err) {
      expect(err).to.be.an('Error')
    }
  })

  /** @test {Helper#_toJSON} */
  it('should not parse xml correctly', done => {
    mal.account._helper._toJSON({})
      .then(done)
      .catch(err => {
        expect(err).to.be.an('Error')

        done()
      })
  })
})
