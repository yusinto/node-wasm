import loadWasm from 'node-wasm';

async function run() {
  const utils = await loadWasm('./rustUtils.wasm');
  const result = utils.rust_function(11);
  console.log(`result: ${result}`);
}

run();
