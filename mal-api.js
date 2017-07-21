'use strict'

// Import the necessary modules.
const Account = require('./lib/Account')
const Anime = require('./lib/Anime')
const Helper = require('./lib/Helper')
const Manga = require('./lib/Manga')

/**
 * A NodeJS wrapper for MyAnimeList API.
 * @type {MalApi}
 */
module.exports = class MalApi {

  /**
   * Create a new instance of the module.
   * @param {!string} user - The username of the user.
   * @param {!string} pass - The password of the user.
   * @param {?boolean} [debug=false] - Show extra output.
   */
  constructor(user, pass, debug = false) {
    const helper = new Helper(user, pass, debug)

    /**
     * The account section of the module.
     * @type {Account}
     */
    this.account = new Account(helper)

    /**
     * The anime section of the module.
     * @type {Anime}
     */
    this.anime = new Anime(helper)

    /**
     * The manga section of the module.
     * @type {Manga}
     */
    this.manga = new Manga(helper)
  }

}
