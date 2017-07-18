'use strict'

const Item = require('./Item')

module.exports = class Manga extends Item {

  searchManga(title) {
    return this.search(Item.ItemType.MANGA, title)
  }

  addManga(id, data) {
    return this.addItem(Item.ItemType.MANGA, id, data)
  }

  updateManga(id, data) {
    return this.updateItem(Item.ItemType.MANGA, id, data)
  }

  deleteManga(id) {
    return this.deleteItem(Item.ItemType.MANGA, id)
  }

}
