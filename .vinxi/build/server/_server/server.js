import{isRedirect as S,isNotFound as C}from"@tanstack/router-core";import T from"tiny-invariant";import{eventHandler as M,toWebRequest as j,getResponseStatus as b,getEvent as I}from"@tanstack/start-server-core";import{startSerializer as p}from"@tanstack/start-client-core";const O={"src_routes_index_tsx--getCount_createServerFn_handler":{functionName:"getCount_createServerFn_handler",importer:()=>import("./assets/index-DoMl8GJ3.js")},"src_routes_index_tsx--updateCount_createServerFn_handler":{functionName:"updateCount_createServerFn_handler",importer:()=>import("./assets/index-BeuiffS4.js")},"src_apis_users_ts--getUsersFn_createServerFn_handler":{functionName:"getUsersFn_createServerFn_handler",importer:()=>import("./assets/users-Dd2BMMFD.js")}},P=M(D),d=O;async function D(r){const t=j(r);return await A({request:t,event:r})}function L(r){return r.replace(/^\/|\/$/g,"")}async function A({request:r,event:t}){const s=new AbortController,i=s.signal,w=()=>s.abort();t.node.req.on("close",w);const h=r.method,g=new URL(r.url,"http://localhost:3000"),x=new RegExp(`${L("/_server")}/([^/?#]+)`),_=g.pathname.match(x),o=_?_[1]:null,c=Object.fromEntries(g.searchParams.entries()),m="createServerFn"in c,E="raw"in c;if(typeof o!="string")throw new Error("Invalid server action param for serverFnId: "+o);const v=d[o];if(!v)throw console.log("serverFnManifest",d),new Error("Server function info not found for "+o);let l;if(l=await v.importer(),!l)throw console.log("serverFnManifest",d),new Error("Server function module not resolved for "+o);const a=l[v.functionName];if(!a)throw console.log("serverFnManifest",d),console.log("fnModule",l),new Error(`Server function module export not resolved for serverFn ID: ${o}`);const N=["multipart/form-data","application/x-www-form-urlencoded"],f=await(async()=>{try{let e=await(async()=>{if(r.headers.get("Content-Type")&&N.some(n=>{var y;return(y=r.headers.get("Content-Type"))==null?void 0:y.includes(n)}))return T(h.toLowerCase()!=="get","GET requests with FormData payloads are not supported"),await a(await r.formData(),i);if(h.toLowerCase()==="get"){let n=c;return m&&(n=c.payload),n=n&&p.parse(n),await a(n,i)}const u=await r.text(),F=p.parse(u);return m?await a(F,i):await a(...F,i)})();return e.result instanceof Response?e.result:!m&&(e=e.result,e instanceof Response)?e:S(e)||C(e)?R(e):new Response(e!==void 0?p.stringify(e):void 0,{status:b(I()),headers:{"Content-Type":"application/json"}})}catch(e){return e instanceof Response?e:S(e)||C(e)?R(e):(console.info(),console.info("Server Fn Error!"),console.info(),console.error(e),console.info(),new Response(p.stringify(e),{status:500,headers:{"Content-Type":"application/json"}}))}})();if(t.node.req.removeListener("close",w),E)return f;if(f.headers.get("Content-Type")==="application/json"){const u=await f.clone().text();u&&JSON.stringify(JSON.parse(u))}return f}function R(r){const{headers:t,...s}=r;return new Response(JSON.stringify(s),{status:200,headers:{"Content-Type":"application/json",...t||{}}})}export{P as default};
