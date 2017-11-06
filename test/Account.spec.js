// Import the necessary modules.
const { expect } = require('chai')

const MalApi = require('..')

/** @test {Account} */
describe('Account', () => {
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

  /** @test {Account#verifyCredentials} */
  it('should verify credentials', done => {
    mal.account.verifyCredentials().then(res => {
      expect(res).to.be.an('object')
      expect(res.id).to.be.a('string')
      expect(res.username).to.be.a('string')

      done()
    }).catch(done)
  })
})
