'use strict'

// Import the necessary modules.
const Item = require('./Item')

/**
 * TODO: make anime typedev
 * @typedef {Object} Anime
 */

// module.exports = class Anime extends Item {
/**
 * The anime section of the module.
 * @extends {Item}
 * @type {Anime}
 */
export default class Anime extends Item {

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
   * @param {!Data} data - The data to add the anime with.
   * @returns {Promise<string, undefined>} - A promise to add an anime.
   */
  addAnime(id, data) {
    return this.addItem(Item.ItemType.ANIME, id, data)
  }

  /**
   * Update an anime based on the given id.
   * @param {!number} id - The id of the anime to update.
   * @param {!Data} data - The data to update the anime with.
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
