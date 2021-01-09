// This is an example of a test file.
// You can run this, and all other tests using the `deno test` command.

import { assert, assertEquals } from "./test.deps.ts";

Deno.test("Example test - assert true", () => {
  assert(true);
});

Deno.test("Example test - 1 = 1", () => {
  assertEquals(1, 1);
});
