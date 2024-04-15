/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_SXIIGTCj.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Login_QarMeMZs.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fast road", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6></main> ` })} `;
}, "/Users/elliothaguirre/new-projects/fast-road/src/pages/index.astro", void 0);

const $$file = "/Users/elliothaguirre/new-projects/fast-road/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
