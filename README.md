# slp-validate2

This is a JavaScript npm library for validating SLP token transactions. It's an alternative implementation of the [slp-validate](https://github.com/simpleledger/slp-validate.js). It's tested against the same test data.

The primary focus
of this library is to validate an SLP TXID. At a high-level, validation follows
this workflow:

- Get TX data from a full node (or DB cache)
- Traverse the DAG to the GENESIS transaction
- Ensure each TX in the DAG has:
  - a valid SLP OP_RETURN
  - Token ID matches for all TXs
- Check for corner cases

## Install

Setup development environment and run tests:

```
git clone https://github.com/Permissionless-Software-Foundation/slp-validate2
cd slp-validate2
npm install
npm test
```

# Licence

[MIT](LICENSE.md)
