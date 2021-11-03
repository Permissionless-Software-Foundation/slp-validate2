/*
  Integration tests for the DAG library
*/

// const assert = require('chai').assert

const BCHJS = require('@psf/bch-js')
// const bchjs = new BCHJS()
const bchjs = new BCHJS({ restURL: 'http://192.168.0.36:3000/v5/' })

const Cache = require('../../lib/cache')
const cache = new Cache({ bchjs })

const DAG = require('../../lib/dag')

const txUnitTestData = require('slp-unit-test-data/tx_input_tests.json')

describe('#validation-test-data', () => {
  let uut

  beforeEach(() => {
    uut = new DAG({ cache })
  })

  describe('#getDag', () => {
    for (let i = 0; i < 6; i++) {
      const thisTestData = txUnitTestData[i]

      console.log(`thisTestData: ${JSON.stringify(thisTestData, null, 2)}`)

      // Start the test.
      it(thisTestData.description, async () => {
        console.log(
          `thisTestData[${i}]: ${JSON.stringify(thisTestData, null, 2)}`
        )

        const txData = await bchjs.RawTransactions.decodeRawTransaction(
          thisTestData.should[0].tx
        )
        console.log(`txData: ${JSON.stringify(txData, null, 2)}`)
        const txid = txData.txid

        const result = await uut.getDag(txid)
        console.log(`result: ${JSON.stringify(result, null, 2)}`)
      })
    }
  })
})
