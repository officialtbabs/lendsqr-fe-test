import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import * as i from 'node:fs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const p = () => import('./index-CSpkCDC5.mjs'), a = "count.txt";
async function c() {
  return parseInt(await i.promises.readFile(a, "utf-8").catch(() => "0"));
}
const _ = o("src_routes_index_tsx--getCount_createServerFn_handler", "/_server", (e, t) => s.__executeServer(e, t)), s = createServerFn({ method: "GET" }).handler(_, () => c()), m = o("src_routes_index_tsx--updateCount_createServerFn_handler", "/_server", (e, t) => d.__executeServer(e, t)), d = createServerFn({ method: "POST" }).validator((e) => e).handler(m, async ({ data: e }) => {
  const t = await c();
  await i.promises.writeFile(a, `${t + e}`);
}), l = createFileRoute("/")({ component: lazyRouteComponent(p, "component", () => l.ssr), loader: async () => await s() });

export { _ as getCount_createServerFn_handler, m as updateCount_createServerFn_handler };
//# sourceMappingURL=index-DoMl8GJ3.mjs.map
