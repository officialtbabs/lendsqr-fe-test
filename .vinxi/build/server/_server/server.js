import{isRedirect as y,isNotFound as R}from"@tanstack/router-core";import T from"tiny-invariant";import{eventHandler as I,toWebRequest as M,getResponseStatus as j,getEvent as D}from"@tanstack/start-server-core";import{startSerializer as u}from"@tanstack/start-client-core";const b={"src_apis_users_ts--getUsersFn_createServerFn_handler":{functionName:"getUsersFn_createServerFn_handler",importer:()=>import("./assets/users-DbhrG1uc.js")},"src_apis_users_ts--getUserDetailsByIdFn_createServerFn_handler":{functionName:"getUserDetailsByIdFn_createServerFn_handler",importer:()=>import("./assets/users-DbhrG1uc.js")},"src_apis_auth_ts--loginFn_createServerFn_handler":{functionName:"loginFn_createServerFn_handler",importer:()=>import("./assets/auth-B_7Lv1yj.js")},"src_apis_auth_ts--logoutFn_createServerFn_handler":{functionName:"logoutFn_createServerFn_handler",importer:()=>import("./assets/auth-B_7Lv1yj.js")},"src_apis_auth_ts--getAuthenticationStatus_createServerFn_handler":{functionName:"getAuthenticationStatus_createServerFn_handler",importer:()=>import("./assets/auth-B_7Lv1yj.js")}},z=I(A),d=b;async function A(r){const t=M(r);return await U({request:t,event:r})}function O(r){return r.replace(/^\/|\/$/g,"")}async function U({request:r,event:t}){const s=new AbortController,i=s.signal,v=()=>s.abort();t.node.req.on("close",v);const _=r.method,w=new URL(r.url,"http://localhost:3000"),N=new RegExp(`${O("/_server")}/([^/?#]+)`),F=w.pathname.match(N),o=F?F[1]:null,c=Object.fromEntries(w.searchParams.entries()),m="createServerFn"in c,x="raw"in c;if(typeof o!="string")throw new Error("Invalid server action param for serverFnId: "+o);const h=d[o];if(!h)throw console.log("serverFnManifest",d),new Error("Server function info not found for "+o);let l;if(l=await h.importer(),!l)throw console.log("serverFnManifest",d),new Error("Server function module not resolved for "+o);const a=l[h.functionName];if(!a)throw console.log("serverFnManifest",d),console.log("fnModule",l),new Error(`Server function module export not resolved for serverFn ID: ${o}`);const E=["multipart/form-data","application/x-www-form-urlencoded"],f=await(async()=>{try{let e=await(async()=>{if(r.headers.get("Content-Type")&&E.some(n=>{var S;return(S=r.headers.get("Content-Type"))==null?void 0:S.includes(n)}))return T(_.toLowerCase()!=="get","GET requests with FormData payloads are not supported"),await a(await r.formData(),i);if(_.toLowerCase()==="get"){let n=c;return m&&(n=c.payload),n=n&&u.parse(n),await a(n,i)}const p=await r.text(),g=u.parse(p);return m?await a(g,i):await a(...g,i)})();return e.result instanceof Response?e.result:!m&&(e=e.result,e instanceof Response)?e:y(e)||R(e)?C(e):new Response(e!==void 0?u.stringify(e):void 0,{status:j(D()),headers:{"Content-Type":"application/json"}})}catch(e){return e instanceof Response?e:y(e)||R(e)?C(e):(console.info(),console.info("Server Fn Error!"),console.info(),console.error(e),console.info(),new Response(u.stringify(e),{status:500,headers:{"Content-Type":"application/json"}}))}})();if(t.node.req.removeListener("close",v),x)return f;if(f.headers.get("Content-Type")==="application/json"){const p=await f.clone().text();p&&JSON.stringify(JSON.parse(p))}return f}function C(r){const{headers:t,...s}=r;return new Response(JSON.stringify(s),{status:200,headers:{"Content-Type":"application/json",...t||{}}})}export{z as default};
