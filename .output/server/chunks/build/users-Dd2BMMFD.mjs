import t from 'axios';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const a = process.env.REACT_APP_BASE_URL + "/api", c = { "Content-Type": "application/json" }, s = t.create({ baseURL: a, headers: c }), p = [s];
p.forEach((r) => {
  r.interceptors.response.use(async (e) => e, (e) => {
    var _a;
    return console.error("Error", e), Promise.reject((_a = e == null ? void 0 : e.response) != null ? _a : e);
  });
});
const i = o("src_apis_users_ts--getUsersFn_createServerFn_handler", "/_server", (r, e) => _.__executeServer(r, e)), _ = createServerFn({ method: "GET" }).validator((r) => r).handler(i, async ({ data: r }) => (await s.get(`/?page=${r.page}&results=5`)).data.results);

export { i as getUsersFn_createServerFn_handler };
//# sourceMappingURL=users-Dd2BMMFD.mjs.map
