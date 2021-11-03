/*
  A blank-canvas reimplentation of the slp-validate library. The primary focus
  of this library is to validate an SLP TXID. At a high-level, validation follows
  this workflow:
  - Get TX data from a full node (or DB cache)
  - Traverse the DAG to the GENESIS transaction
  - Ensure each TX in the DAG has:
    - a valid SLP OP_RETURN
    - Token ID matches for all TXs
  - Check for corner cases
*/

/* eslint-disable no-async-promise-executor */

'use strict'

const Cache = require('./lib/cache')
const DAG = require('./lib/dag')

class SlpValidate {
  constructor (localConfig = {}) {
    // Dependency injection
    this.bchjs = localConfig.bchjs
    if (!this.bchjs) {
      throw new Error(
        'Must inject instance of bch-js when instantiating SlpValidate'
      )
    }

    // Encapsulate dependencies
    this.cache = new Cache(localConfig)
    localConfig.cache = this.cache
    this.dag = new DAG(localConfig)
  }

  // Given a txid, recursivly crawl the DAG and validate the SLP transaction.
  async validateTxid (txid) {
    try {
      console.log('hello world')
    } catch (err) {
      console.error('Error in validateTxid()')
      throw err
    }
  }
}

module.exports = SlpValidate
