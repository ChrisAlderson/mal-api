// Import the necessary modules.
const got = require('got')
const debug = require('debug')
const { Builder, Parser } = require('xml2js')
const { stringify } = require('querystring')

const { name } = require('../package.json')

/**
 * The request helper of the module.
 * @type {Helper}
 */
module.exports = class Helper {

  /**
   * Create a new Item object.
   * @param {!Object} options - The options for the Mal API.
   * @param {!string} options.username - The username of the user.
   * @param {!string} options.password - The password of the user.
   */
  constructor({username, password}) {
    if (!username || !password) {
      throw new Error('username and password are not given!')
    }

    /**
     * The XML builder.
     * @type {Builder}
     * @see https://github.com/Leonidas-from-XIV/node-xml2js
     */
    this._builder = new Builder({
      rootName: 'entry',
      renderOpts: {
        pretty: false
      }
    })
    /**
     * The XML parser.
     * @type {Parser}
     * @see https://github.com/Leonidas-from-XIV/node-xml2js
     */
    this._parser = new Parser({
      explicitArray: false
    })
    /**
     * The authorization header used for the requests.
     * @type {string}
     */
    this._auth = Buffer.from(`${username}:${password}`).toString('base64')
    /**
     * Show extra output.
     * @type {boolean}
     */
    this._debug = debug(name)
  }

  /**
   * Method for parsing XML to a JSON object.
   * @param {!string} xml - The XML string to parse.
   * @returns {Promise<Object, Error>} - The promise to parse a XML string to
   * a JSON object.
   */
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

  /**
   * Send a HTTP request to the Mal API
   * @param {!string} endpoint - The endpoint to send the GET request to.
   * @param {?Object} opts - Additional options to send with the HTTP request.
   * @returns {Promise<Object, Error>} - The promise to send a HTTP
   * request.
   */
  _request(endpoint, opts) {
    const auth = this._auth
    const options = Object.assign({}, opts, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': opts.method === 'POST'
          ? 'application/x-www-form-urlencoded'
          : false
      }
    })

    this._debug(`Making request to: '${endpoint}${stringify(opts)}'`)
    return got(`https://myanimelist.net/api/${endpoint}`, options)
  }

  /**
   * Send a GET request to the Mal Api.
   * @param {!string} endpoint - The endpoint to send the GET request to.
   * @param {?Object} [opts={}] - Additional options to send with the GET
   * request.
   * @returns {Promise<Object, Error>} - The promise to send a GET
   * request.
   */
  get(endpoint, opts = {}) {
    return this._request(endpoint, Object.assign(opts, {
      method: 'GET'
    })).then(({body}) => this._toJSON(body))
  }

  /**
   * Send a POST request to the Mal API.
   * @param {!string} endpoint - The endpoint to send the POST request to.
   * @param {!Object} data - Form data to be send with the POST request.
   * @returns {Promise<Object, Error>} The promise to send a POST
   * request.
   */
  post(endpoint, data) {
    const builder = this._builder
    return this._request(endpoint, {
      method: 'POST',
      form: true,
      body: {
        data: builder.buildObject(data)
      }
    }).then(({body}) => body)
  }

  /**
   * Send a DELETE request to the Mal API.
   * @param {!string} endpoint - The endpoint to send the DELETE request to.
   * @param {?Object} [opts={}] - Additional options to send with the DELETE
   * request.
   * @returns {Promise<Object, Error>} - The promise to send a DELETE
   * request.
   */
  delete(endpoint, opts = {}) {
    return this._request(endpoint, Object.assign(opts, {
      method: 'DELETE'
    })).then(({body}) => body)
  }

}
