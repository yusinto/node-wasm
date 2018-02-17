import fs from 'fs';
import path from 'path';

const cache = {};

const readFileAsByteArray = (filepath) => {
  const bytes = fs.readFileSync(filepath);
  return new Uint8Array(bytes);
};

const instantiate = async (byteArray) => {
  const module = await WebAssembly.compile(byteArray);
  return new WebAssembly.Instance(module);
};

export default async (filepath) => {
  const resolvedPath = path.resolve(filepath);

  const cached = cache[resolvedPath];
  if(cached) {
    return cached;
  }

  const byteArray = readFileAsByteArray(resolvedPath);
  const {exports} = await instantiate(byteArray);
  cache[resolvedPath] = exports;
  return exports;
};
