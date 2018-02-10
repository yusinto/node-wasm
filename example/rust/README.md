# node-wasm-example-rust

Minimal rust project which compiles to wasm for use in the node example project. 

If you want to add/edit the rust code, make changes to `src/lib.rs` and run `./build.sh`. 
You'll need to decorate your rust functions with `#[no_mangle]` so the compiler does not 
modify your function names. 

```
./build.sh
```
