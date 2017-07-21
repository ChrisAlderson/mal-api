'use strict'

// Import the necessary modules.
const Item = require('./Item')

/**
 * The anime object of the MalApi.
 * @typedef {Object} Anime
 * @property {!stirng} id The id of the anime.
 * @property {!string} title The title of the anime.
 * @property {!string} english The english of the anime.
 * @property {!string} synonyms The synonyms of the anime.
 * @property {!string} episodes The episodes of the anime.
 * @property {!string} score The score of the anime.
 * @property {!string} type The type of the anime.
 * @property {!string} status The status of the anime.
 * @property {!string} start_date The start_date of the anime.
 * @property {!string} end_date The end_date of the anime.
 * @property {!string} synopsis The synopsis of the anime.
 * @property {!string} image The image of the anime.
 */

/**
 * The anime section of the module.
 * @extends {Item}
 * @type {Anime}
 */
module.exports = class Anime extends Item {

  /**
   * Search for an anime based on the title.
   * @param {!string} title - Search for an anime based on the title.
   * @returns {Promise<Array<Anime>, undefined>} - The promise to search for an
   * anime.
   */
  searchAnime(title) {
    return this.search(Item.ItemType.ANIME, title)
  }

  /**
   * Add an anime based on the given id.
   * @param {!number} id - The id of the anime to add.
   * @param {!Object} data - The data to add the anime with.
   * @returns {Promise<string, undefined>} - A promise to add an anime.
   */
  addAnime(id, data) {
    return this.addItem(Item.ItemType.ANIME, id, data)
  }

  /**
   * Update an anime based on the given id.
   * @param {!number} id - The id of the anime to update.
   * @param {!Object} data - The data to update the anime with.
   * @returns {Promise<string, undefined>} - A promise to update an anime.
   */
  updateAnime(id, data) {
    return this.updateItem(Item.ItemType.ANIME, id, data)
  }

  /**
   * Delete an anime based on the given id.
   * @param {!number} id - The id of the anime to delete.
   * @returns {Promise<string, undefined>} - A promise to delete an anime.
   */
  deleteAnime(id) {
    return this.deleteItem(Item.ItemType.ANIME, id)
  }

}
