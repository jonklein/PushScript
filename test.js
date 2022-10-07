import { strict as assert } from "node:assert";
import { pushRunString } from "./push.js";

it(`FLOAT.FROMBOOLEAN`, () => {
  assert.deepEqual(
    pushRunString(`( 1000.0 500.0 FLOAT.> FLOAT.FROMBOOLEAN )`).valueOf(),
    {
      boolean: [],
      code: ["( 1000.0 500.0 FLOAT.> FLOAT.FROMBOOLEAN )"],
      exec: [],
      float: [1],
      integer: [],
      name: [],
    }
  );
});
