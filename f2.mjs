import * as Https from "firebase-functions/v2/https";

var fn = Https.onCall({
    region: Domain.firebaseRegion,
    allowedCors: Common.allowedCors
  }, (async function (request) {
      return "reply f2"
    }));

export {
 fn
}