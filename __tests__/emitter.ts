import { emitter } from "../src/emitter"

describe("emitter", () => {
  test("emitter", async () => {
    const wasm = emitter();
    await WebAssembly.instantiate(wasm);
  })
})
