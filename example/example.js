import loadWasm from '../lib/index';

async function main() {
  const utils = await loadWasm('./rustUtils.wasm');
  const result = utils.rust_function(11);
  console.log(`result: ${result}`);
}

main();
