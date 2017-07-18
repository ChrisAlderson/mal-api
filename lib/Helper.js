'use strict'

const { Builder, Parser } = require('xml2js')
const got = require('got')
const querystring = require('querystring')

module.exports = class Helper {

  constructor(user, pass, debug = false) {
    if (!user || !pass) throw new Error('username and password are not given!')

    this._builder = new Builder({
      rootName: 'entry',
      renderOpts: {
        pretty: false
      }
    })
    this._parser = new Parser({
      explicitArray: false
    })

    this._auth = Buffer.from(`${user}:${pass}`).toString('base64')
    this._debug = debug
  }

  _toJSON(xml) {
    return new Promise((resolve, reject) => {
      return this._parser.parseString(xml, (err, res) => {
        if (err) {
          return reject(err)
        }

        return resolve(res)
      })
    })
  }

  _request(uri, opts) {
    const auth = this._auth
    opts = Object.assign(opts, {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': opts.method === 'POST' ? 'application/x-www-form-urlencoded' : false
      }
    })

    if (this._debug) {
      console.warn(`Making request to: '${uri}${querystring.stringify(opts)}'`)
    }

    return got(`https://myanimelist.net/api/${uri}`, opts)
  }

  get(uri, data = {}) {
    return this._request(uri, Object.assign(data, {
      method: 'GET'
    })).then(({body}) => this._toJSON(body))
  }

  post(uri, data = {}) {
    const builder = this._builder
    return this._request(uri, {
      method: 'POST',
      body: data ? {data: builder.buildObject(data)} : false
    }).then(({body}) => body)
  }

  delete(uri, data = {}) {
    return this._request(uri, Object.assign(data, {
      method: 'DELETE'
    })).then(({body}) => body)
  }
  
}
