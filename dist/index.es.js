import { useState as o, useEffect as E } from "react";
function R(r, s, a = b) {
  const n = new AbortController(), [c, t] = o("idle"), [u, w] = o(null), [i, l] = o(null);
  return E(() => {
    async function h(d) {
      t("loading");
      try {
        const e = await fetch(d, {
          ...s,
          signal: n.signal
        });
        e.ok || a(e.status);
        const f = await e.json();
        w(f), t("success");
      } catch (e) {
        t("error"), l(e), console.error(e);
      } finally {
        return () => n.abort();
      }
    }
    h(r);
  }, [r]), [u, c, i];
}
function b(r) {
  switch (r) {
    case 400:
      throw new Error("Bad Request");
    case 401:
      throw new Error("Request is unauthorized");
    case 403:
      throw new Error("Request has been denied");
    case 404:
      throw new Error("Requested data not found");
    case 405:
      throw new Error("Method Not Allowed");
    case 406:
      throw new Error("Not Acceptable");
    case 408:
      throw new Error("Request Timedout");
    default:
      throw new Error("There's been an error while retrieving data");
  }
}
export {
  R as useFetch
};
//# sourceMappingURL=index.es.js.map
