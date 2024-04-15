/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_SXIIGTCj.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Login_QarMeMZs.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { id, category, title, from, to, price, fono, images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex bg-white bg-opacity-5 cursor-pointer h-64 w-full md:w-4/5 lg:w-3/5 lg:mx-0 mb-3 rounded-lg shadow-xl"> <figure class="relative w-40 md:w-56 h-full"> <span class="absolute bottom-3 left-3 bg-white/60 rounded-full text-black text-sm px-2"> ${category} </span> <img class="w-full h-full object-cover rounded-lg"${addAttribute(images, "src")}${addAttribute(title, "alt")}> </figure> <div class="w-4/5 md:w-3/5 flex flex-col px-3 md:mx-3 justify-center text-white"> <h2 class="text-lg mb-5">${title}</h2> <span class="text-lg flex justify-evenly"> <small class="font-thin text-white">Desde:</small> ${id} </span> <span class="text-lg flex justify-evenly"> <small class="font-thin">Destino:</small> ${to} </span> <div class="flex justify-between mt-10"> <span class="mt-3 font-extrabold mr-2">$ ${price}</span> <div class="flex gap-3 mt-3"> <a href="tel:+56950246702" target="_blank" class="md:font-bold text-sm rounded-lg shadow-md md:px-4 p-1 border hover:border-green-600 text-white">
Llamar
</a> <a${addAttribute(`https://wa.me/+${fono}/?text=Hola,%20Estoy%20interesado%20en%20el%20servicio:%20${title}%20desde:%20${from},%20hacia:%20${to}`, "href")} target="_blank" class="md:font-bold text-sm rounded-lg shadow-md md:px-4 p-1 text-white bg-green-800 border border-white hover:bg-green-600 hover:border-black"> <p>Whatsapp</p> </a> </div> </div> </div> </article> <!-- Los datos obtenidos en la compilación pueden ser pasados como props a otros componentes --> <!-- <Contact client:load email={randomUser.email} />
<Location city={randomUser.location.city} /> -->`;
}, "/Users/elliothaguirre/new-projects/fast-road/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await response.json();
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center mt-20"> ${data?.map((el) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "key": el.id, ...el })}`)} </div> ` })}`;
}, "/Users/elliothaguirre/new-projects/fast-road/src/pages/Posts.astro", void 0);

const $$file = "/Users/elliothaguirre/new-projects/fast-road/src/pages/Posts.astro";
const $$url = "/Posts";

export { $$Posts as default, $$file as file, $$url as url };
