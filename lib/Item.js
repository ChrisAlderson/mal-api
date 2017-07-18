'use strict'

module.exports = class Item {

  constructor(helper) {
    this._helper = helper

    Item.ItemType = {
      ANIME: 'anime',
      MANGA: 'manga'
    }
  }

  search(type, q) {
    return this._helper.get(`${type}/search.xml`, {
      query: { q }
    }).then(res => res[type].entry)
  }

  addItem(type, id, data = {}) {
    if (!data.status) {
      data.status = 1
    }

    return this._helper.post(`${type}list/add/${id}.xml`, data)
  }

  updateItem(type, id, data) {
    return this._helper.post(`${type}list/update/${id}.xml`, data)
  }

  deleteItem(type, id) {
    return this._helper.delete(`${type}list/delete/${id}.xml`)
  }

}
