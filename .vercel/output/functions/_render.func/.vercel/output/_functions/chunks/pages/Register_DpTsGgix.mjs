/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_SXIIGTCj.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Login_QarMeMZs.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register form" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <article class="max-w-[30rem] block mx-auto mt-32"> <h1 class="text-2xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-pink-500 bg-clip-text text-transparent">
Crea una cuenta nueva
</h1> <form class="grid grid-cols-2 gap-y-[2rem] gap-x-[1rem] my-10"> <input type="text" name="firstName" placeholder="Nombre" class="rounded-lg p-2"> <input type="text" name="lastName" placeholder="Apellido" class="rounded-lg p-2"> <input type="text" name="email" placeholder="Email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$" class="col-span-2 rounded-lg p-2"> <input type="text" name="phone" placeholder="Fono" pattern="^[0-9]*$" class="col-span-2 rounded-lg p-2"> <input type="password" name="password" placeholder="Contraseña" class="col-span-2 rounded-lg p-2"> <input type="password" name="password_confirmation" placeholder="Confirmar contraseña" class="col-span-2 rounded-lg p-2"> <input type="submit" name="submit" value="CREAR CUENTA" class="col-span-2 deley-button rounded-lg m-10 p-2 bg-slate-500 cursor-pointer hover:scale-105 motion-safe:transition"> </form>
)}
</article> </main> ` })}`;
}, "/Users/elliothaguirre/new-projects/fast-road/src/pages/Register.astro", void 0);

const $$file = "/Users/elliothaguirre/new-projects/fast-road/src/pages/Register.astro";
const $$url = "/Register";

export { $$Register as default, $$file as file, $$url as url };
