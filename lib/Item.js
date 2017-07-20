'use strict'

/**
 * TODO: make data typedev
 * @typedef {Object} Data
 */

// module.exports = class Item {
/**
 * The item section of the module.
 * @type {Item}
 */
export default class Item {

  /**
   * Create a new Item object.
   * @param {Helper} helper - The request helper of the account section.
   */
  constructor(helper) {
    /**
     * The request helper of the item section.
     * @type {Helper}
     */
    this._helper = helper

    /**
     * The types of content available.
     * @type {Object}
     */
    Item.ItemType = {
      ANIME: 'anime',
      MANGA: 'manga'
    }
  }

  /**
   * Search for content based on the title.
   * @param {!string} type - The type of content to search for.
   * @param {!string} q - The query term to search for.
   * @returns {Promise<Array<Manga>, undefined>} - The promise to search for
   * content.
   */
  search(type, q) {
    return this._helper.get(`${type}/search.xml`, {
      query: { q }
    }).then(res => res[type].entry)
  }

  /**
   * Add content based on the given id.
   * @param {!string} type - The type of content to add.
   * @param {!number} id - The id of the content to add.
   * @param {!Data} data - The data to add the content with.
   * @returns {Promise<string, undefined>} - A promise to add content.
   */
  addItem(type, id, data) {
    if (!data.status) {
      data.status = 1
    }

    return this._helper.post(`${type}list/add/${id}.xml`, data)
  }

  /**
   * Update content based on the given id.
   * @param {!string} type - The type of content to update.
   * @param {!number} id - The id of the content to update.
   * @param {!Data} data - The data to update the content with.
   * @returns {Promise<string, undefined>} - A promise to update content.
   */
  updateItem(type, id, data) {
    return this._helper.post(`${type}list/update/${id}.xml`, data)
  }

  /**
   * Delete content based on the given id.
   * @param {!string} type - The type of content to detele.
   * @param {!number} id - The id of the content to delete.
   * @returns {Promise<string, undefined>} - A promise to delete content.
   */
  deleteItem(type, id) {
    return this._helper.delete(`${type}list/delete/${id}.xml`)
  }

}
