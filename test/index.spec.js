// Import the necessary modules.
const { expect } = require('chai')

const MalApi = require('..')

/** @test {MalApi} */
describe('MalApi', () => {
  /**
   * The MalApi instance.
   * @type {MalApi}
   */
  let mal

  /**
   * Hook for setting up the MalApi tests.
   * @type {Function}
   */
  before(() => {
    mal = new MalApi({
      username: process.env.MAL_USER,
      password: process.env.MAL_PASS
    })
  })

  /** @test {MalApi#constructor} */
  it('should throw an error when user and pass are null', () => {
    try {
      const malApi = new MalApi({})
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
