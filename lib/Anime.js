'use strict';

const Item = require('./Item');

module.exports = class Anime extends Item {

  constructor(helper) {
    super(helper);
  }

  searchAnime(title) {
    return this.search(Item.ItemType.ANIME, title);
  }

  addAnime(id, data) {
    return this.addItem(Item.ItemType.ANIME, id, data);
  }

  updateAnime(id, data) {
    return this.updateItem(Item.ItemType.ANIME, id, data);
  }

  deleteAnime(id) {
    return this.deleteItem(Item.ItemType.ANIME, id);
  }

}
