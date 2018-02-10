import loadWasm from 'node-wasm';

async function run() {
  const {add} = await loadWasm('./rust.wasm');
  const result = add(11, 22);
  console.log(`result: ${result}`);
}

run();
