import * as i$1 from 'node:fs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const a = "count.txt";
async function c() {
  return parseInt(await i$1.promises.readFile(a, "utf-8").catch(() => "0"));
}
const s = o("src_routes_index_tsx--updateCount_createServerFn_handler", "/_server", (e, r) => i.__executeServer(e, r)), i = createServerFn({ method: "POST" }).validator((e) => e).handler(s, async ({ data: e }) => {
  const r = await c();
  await i$1.promises.writeFile(a, `${r + e}`);
});

export { s as updateCount_createServerFn_handler };
//# sourceMappingURL=index-BeuiffS4.mjs.map
