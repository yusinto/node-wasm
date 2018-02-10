import fs from 'fs';

// const imports = {
//   env: {
//     memoryBase: 0,
//     tableBase: 0,
//     memory: new WebAssembly.Memory({initial: 256}),
//     table: new WebAssembly.Table({initial: 0, element: 'anyfunc'}),
//   }
// };

const readFileAsByteArray = (path) => {
  const bytes = fs.readFileSync(path);
  return new Uint8Array(bytes);
};

const instantiate = async (byteArray) => {
  const module = await WebAssembly.compile(byteArray);
  return new WebAssembly.Instance(module);
};

export default async (path) => {
  const byteArray = readFileAsByteArray(path);
  const instance = await instantiate(byteArray);
  return instance.exports;
};
