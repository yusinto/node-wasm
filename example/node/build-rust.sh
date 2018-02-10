!#bash

cd ../rust
rustup toolchain install nightly
rustup update
rustup target add wasm32-unknown-unknown --toolchain nightly
cargo +nightly build --target wasm32-unknown-unknown --release && cp target/wasm32-unknown-unknown/release/deps/*.wasm ../node/
