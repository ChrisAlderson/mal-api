/**
 * The user object of the MalApi.
 * @typedef {Object} User
 * @property {string} id The id of the user.
 * @property {string} username The username of the user.
 */

/**
 * The account section of the module.
 * @type {Account}
 */
module.exports = class Account {

  /**
   * Create a new Account object.
   * @param {Helper} helper - The request helper of the account section.
   */
  constructor(helper) {
    /**
     * The request helper of the account section.
     * @type {Helper}
     */
    this._helper = helper
  }

  /**
   * Verify the credentials set.
   * @returns {Promise<User, Error>} - The credentials of the user.
   */
  verifyCredentials() {
    return this._helper.get('account/verify_credentials.xml')
      .then(({user}) => user)
  }

}
