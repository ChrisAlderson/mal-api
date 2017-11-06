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
   * @param {!Object} options - The options for the Mal API.
   * @param {!string} options.username - The username of the user.
   * @param {!string} options.password - The password of the user.
   */
  constructor({username, password}) {
    const helper = new Helper({username, password})

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
