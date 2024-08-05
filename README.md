# bun-duplicate-import

Steps to reproduce:

- `bun install`
- `bun ./bundle.js`

Problem is that `index.js` looks like:

```js
// f1.mjs
import * as Https from "firebase-functions/v2/https";
var fn = Https.onCall({
  region: Domain.firebaseRegion,
  allowedCors: Common.allowedCors
}, async function(request) {
  return "reply f1";
});
// f2.mjs
import * as Https2 from "firebase-functions/v2/https";
var fn2 = Https2.onCall({
  region: Domain.firebaseRegion,
  allowedCors: Common.allowedCors
}, async function(request) {
  return "reply f2";
});
export {
  fn2 as f2,
  fn as f1
};
```

and the import of `"firebase-functions/v2/https"` was duplicated.