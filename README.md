# node-wasm

[![npm version](https://img.shields.io/npm/v/node-wasm.svg?style=flat-square)](https://www.npmjs.com/package/node-wasm) [![npm downloads](https://img.shields.io/npm/dm/node-wasm.svg?style=flat-square)](https://www.npmjs.com/package/node-wasm) [![npm](https://img.shields.io/npm/dt/node-wasm.svg?style=flat-square)](https://www.npmjs.com/package/node-wasm) [![npm](https://img.shields.io/npm/l/node-wasm.svg?style=flat-square)](https://www.npmjs.com/package/node-wasm)

> **Bare minimum util to import and use wasm in node** :clap:

This is still work in progress.

## Installation

```
yarn add node-wasm
```

## Quickstart

```javascript
import loadWasm from 'node-wasm';

async function run() {
  const {rust_function} = await loadWasm('/local/path/to/wasm');
  const result = rust_function();
  console.log(result);
}

run();
```

## Example
Check the [example](https://github.com/yusinto/node-wasm/tree/master/example) for a 
simple demo for now.