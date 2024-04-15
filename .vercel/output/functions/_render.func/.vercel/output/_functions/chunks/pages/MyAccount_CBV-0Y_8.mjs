/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_SXIIGTCj.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Login_QarMeMZs.mjs';

const $$Astro = createAstro();
const $$MyAccount = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MyAccount;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi cuenta personal" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <p class="text-white mt-20 text-center">Aqui se encuentra la cuenta personal de cada cliente con su Log out</p> <button class="rounded-xl bg-red-500 p-1 ">Log Out</button> </article> ` })}`;
}, "/Users/elliothaguirre/new-projects/fast-road/src/pages/MyAccount.astro", void 0);

const $$file = "/Users/elliothaguirre/new-projects/fast-road/src/pages/MyAccount.astro";
const $$url = "/MyAccount";

export { $$MyAccount as default, $$file as file, $$url as url };
