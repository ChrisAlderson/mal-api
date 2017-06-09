'use strict';

module.exports = class Account {

  constructor(helper) {
    this._helper = helper;
  }

  verifyCredentials() {
    return this._helper.get('account/verify_credentials.xml')
      .then(({user}) => user);
  }

}
