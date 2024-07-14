import { initWasm, inline } from '@css-inline/css-inline-wasm';

const wasm = {
  initWasmPromise: initWasm(import('./index_bg.mjs').then((r) => r.default || r)),
  cssInline: {
    inline
  }
};

export { wasm as default };
//# sourceMappingURL=wasm.mjs.map
