'use strict'

// Import the necessary modules.
const Item = require('./Item')

/**
 * The manga object of the MalApi.
 * @typedef {Object} Manga
 * @property {string} id The id of the manga.
 * @property {string} title The title of the manga.
 * @property {string} english The english of the manga.
 * @property {string} synonyms The synonyms of the manga.
 * @property {string} chapters The chapters of the manga.
 * @property {string} volumes The volumes of the manga.
 * @property {string} score The score of the manga.
 * @property {string} type The type of the manga.
 * @property {string} status The status of the manga.
 * @property {string} start_date The start_date of the manga.
 * @property {string} end_date The end_date of the manga.
 * @property {string} synopsis The synopsis of the manga.
 * @property {string} image The image of the manga.
 */

/**
 * The manga section of the module.
 * @extends {Item}
 * @type {Manga}
 */
module.exports = class Manga extends Item {

  /**
   * Search for a manga based on the title.
   * @param {!string} title - Search for a manga based on the title.
   * @returns {Promise<Array<Manga>, Error>} - The promise to search for a
   * manga.
   */
  searchManga(title) {
    return this.search(Item.ItemType.MANGA, title)
  }

  /**
   * Add a manga based on the given id.
   * @param {!number} id - The id of the manga to add.
   * @param {!Object} data - The data to add the manga with.
   * @returns {Promise<string, Error>} - A promise to add a manga.
   */
  addManga(id, data) {
    return this.addItem(Item.ItemType.MANGA, id, data)
  }

  /**
   * Update a manga based on the given id.
   * @param {!number} id - The id of the manga to update.
   * @param {!Object} data - The data to update the manga with.
   * @returns {Promise<string, Error>} - A promise to update a manga.
   */
  updateManga(id, data) {
    return this.updateItem(Item.ItemType.MANGA, id, data)
  }

  /**
   * Delete a manga based on the given id.
   * @param {!number} id - The id of the manga to delete.
   * @returns {Promise<string, Error>} - A promise to delete a manga.
   */
  deleteManga(id) {
    return this.deleteItem(Item.ItemType.MANGA, id)
  }

}
