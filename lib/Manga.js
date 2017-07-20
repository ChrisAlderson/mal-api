'use strict'

// Import the necessary modules.
const Item = require('./Item')

/**
 * TODO: make manga typedev
 * @typedef {Object} Manga
 */

// module.exports = class Manga extends Item {
/**
 * The manga section of the module.
 * @extends {Item}
 * @type {Manga}
 */
export default class Manga extends Item {

  /**
   * Search for a manga based on the title.
   * @param {!string} title - Search for a manga based on the title.
   * @returns {Promise<Array<Manga>, undefined>} - The promise to search for a
   * manga.
   */
  searchManga(title) {
    return this.search(Item.ItemType.MANGA, title)
  }

  /**
   * Add a manga based on the given id.
   * @param {!number} id - The id of the manga to add.
   * @param {!Data} data - The data to add the manga with.
   * @returns {Promise<string, undefined>} - A promise to add a manga.
   */
  addManga(id, data) {
    return this.addItem(Item.ItemType.MANGA, id, data)
  }

  /**
   * Update a manga based on the given id.
   * @param {!number} id - The id of the manga to update.
   * @param {!Data} data - The data to update the manga with.
   * @returns {Promise<string, undefined>} - A promise to update a manga.
   */
  updateManga(id, data) {
    return this.updateItem(Item.ItemType.MANGA, id, data)
  }

  /**
   * Delete a manga based on the given id.
   * @param {!number} id - The id of the manga to delete.
   * @returns {Promise<string, undefined>} - A promise to delete a manga.
   */
  deleteManga(id) {
    return this.deleteItem(Item.ItemType.MANGA, id)
  }

}
