'use strict';

const Account = require('./lib/Account');
const Anime = require('./lib/Anime');
const Helper = require('./lib/Helper');
const Item = require('./lib/Item');
const Manga = require('./lib/Manga');

module.exports = class MalAPI {

  constructor(user, pass, debug = false) {
    const helper = new Helper(user, pass, debug);

    this.account = new Account(helper);
    this.anime = new Anime(helper);
    this.manga = new Manga(helper);
  }

}
