# node-wasm-example-rust

Minimal rust project which compiles to wasm for use in the node example project. 

## Running the project

1. Install rust. Once done, restart terminal:

    ```bash
    curl https://sh.rustup.rs -sSf | sh
    ```
   
2. Edit the rust code under `src/lib.rs` if you want to change/add functionality:

    ```rust
    // you need no_mangle to preserve your function name
    #[no_mangle]
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    ```
    
3. Compile rust to wasm:

    ```
    ./build.sh
    ```
    
    This shell script will compile your rust code and copy the resultant wasm to 
    [example/node](https://github.com/yusinto/node-wasm/tree/master/example/node) 
    so you can run the node app to test your rust code.