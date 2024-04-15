/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot, F as Fragment } from '../astro_SXIIGTCj.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { Auth } from '@auth/core';
import { parseString } from 'set-cookie-parser';
import GitHub from '@auth/core/providers/github';

const defineConfig = (config) => {
  config.prefix ??= "/api/auth";
  return config;
};

const authConfig = defineConfig({
  providers: [
    GitHub({
      clientId: "974bcf276c1ef72c6ad2",
      clientSecret: "7bc7663851156f82b88969060ddd44200db68fc8"
    })
  ]
});

const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AstroAuthHandler(prefix, options = authConfig) {
  return async ({ cookies, request }) => {
    const url = new URL(request.url);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/"))
      return;
    const res = await Auth(request, options);
    if (["callback", "signin", "signout"].includes(action)) {
      res.headers.getSetCookie().forEach((cookie) => {
        const { name, value, ...options2 } = parseString(cookie);
        cookies.set(name, value, options2);
      });
      res.headers.delete("Set-Cookie");
    }
    return res;
  };
}
function AstroAuth(options = authConfig) {
  const { AUTH_SECRET, AUTH_TRUST_HOST, VERCEL, NODE_ENV } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { AUTH_SECRET: "a7f4a04f6fec22221db3112ac79dc96f3d1d142bda80dfc479b2ee7ff2a4b795", AUTH_TRUST_HOST: "true", NODE: process.env.NODE, _: process.env._, NODE_ENV: process.env.NODE_ENV });
  options.secret ??= AUTH_SECRET;
  options.trustHost ??= !!(AUTH_TRUST_HOST ?? VERCEL ?? NODE_ENV !== "production");
  const { prefix = "/api/auth", ...authOptions } = options;
  const handler = AstroAuthHandler(prefix, authOptions);
  return {
    async GET(context) {
      return await handler(context);
    },
    async POST(context) {
      return await handler(context);
    }
  };
}
async function getSession(req, options = authConfig) {
  options.secret ??= "a7f4a04f6fec22221db3112ac79dc96f3d1d142bda80dfc479b2ee7ff2a4b795";
  options.trustHost ??= true;
  const url = new URL(`${options.prefix}/session`, req.url);
  const response = await Auth(new Request(url, { headers: req.headers }), options);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-between items-center fixed top-2 left-4 z-10 w-[100%] py-2 pl-8 pr-10 lg:pr-20 shadow-2xl text-white bg-white bg-opacity-10 rounded-2xl"> <h2 class="font-bold text-2xl"> <a href="/">Fastline</a> </h2> <ul class="flex gap-4"> ${renderTemplate`<li class="py-1 rounded-lg border hover:border-cyan-800 px-3 hover:scale-110 active:bg-black"> <a href="/MyAccount">Mi cuenta</a> </li>`} ${renderTemplate`<li class="py-1 rounded-lg border hover:border-cyan-800 px-3 hover:scale-110 active:bg-black"> <a href="/Posts">Posts</a> </li>`} <a href="/Login"><li class="py-1 hover:scale-110">Login</li></a> ${renderTemplate`<li class="py-1 hover:scale-110"> <a href="/Register">Register</a> </li>`} <li> <button class="font-bold rounded-lg shadow-md px-4 p-1 bg-yellow-600 border AxAZAAborder-gray-400 text-white hover:scale-110 hover:border-cyan-100 active:bg-yellow-800"> <a href="/PostPage">Publicar</a> </button> </li> </ul> </nav> `;
}, "/Users/elliothaguirre/new-projects/fast-road/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Plataforma digital como intermediario entre transporte - clientes"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical" href="https://fastline.pages.dev/"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderSlot($$result2, $$slots["default"])} ` })}</html>`;
}, "/Users/elliothaguirre/new-projects/fast-road/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const session = await getSession(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-[30rem] block mx-auto mt-32"> <h1 class="text-2xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-pink-500 bg-clip-text text-transparent">
Ingresa con tu cuenta
</h1> ${session ? renderTemplate`<p class="text-white">Welcome ${session.user?.name}</p>` : renderTemplate`<p class="text-white">Not longer in</p>`} <!-- <form
      class="grid grid-cols-2 gap-y-[2rem] gap-x-[1rem] my-10"
    >
      <input
        type="text"
        name="email"
        placeholder="Email"
        pattern="[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,4}$"
        class="col-span-2 rounded-lg p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        class="col-span-2 rounded-lg p-2"
      />
      <input
        type="submit"
        name="submit"
        value="INGRESAR"
        class="col-span-2 rounded-lg p-2 m-10 bg-orange-500"
      />
    </form> --> </article> <div class="flex flex-col justify-center mt-20"> <button class="text-white" id="login">Login con Github</button> <button class="alert text-white">Click me!</button> <button class="text-white" id="logout">Logout</button> </div> ` })}  `;
}, "/Users/elliothaguirre/new-projects/fast-road/src/pages/Login.astro", void 0);

const $$file = "/Users/elliothaguirre/new-projects/fast-road/src/pages/Login.astro";
const $$url = "/Login";

const Login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, AstroAuth as A, Login as L };
