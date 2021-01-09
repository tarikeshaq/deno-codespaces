// deps.ts is used to manage third party imports.
// example:
export { assert } from "https://deno.land/std@0.83.0/testing/asserts.ts";

// NOTE: You can use import_maps (still unstable as of me writing this), which would allow you to
// set aliases for imports. That way, if you have import_maps setup (look at import_map.json) you can do:
// export { assert } from "testing/asserts.ts"

// You can then use those directly using deps.ts like this:
// import { assert } from "./deps.ts"
// assert(true)
export {};
