/*
  This class is used to generate a simple key-value (in-memory) cache of TX data.
  The 'key' is the txid. The 'value' is the tx data.
*/

class Cache {
  constructor (localConfig = {}) {
    this.bchjs = localConfig.bchjs
    if (!this.bchjs) {
      throw new Error('Must inject instance of bch-js when instantiating Cache')
    }

    this.cache = {}
  }

  // Save a new entry into the cache.
  put (key, value) {
    if (typeof key !== 'string') throw new Error('key must be a string')

    this.cache[key] = value
  }

  // Get the tx data from the full node if it's not already in the cache.
  async get (key) {
    // Try to retrieve it from the cache.
    let txData = this.cache[key]

    // If the data existed in the cache, this function is done.
    if (txData) return txData

    // Get TX Data from full node if it's not in the cache.
    txData = await this.bchjs.Transaction.get3(key)
    console.log(`txData: ${JSON.stringify(txData, null, 2)}`)

    // Save the data to the cache.
    this.put(key, txData)

    return txData
  }
}

module.exports = Cache
