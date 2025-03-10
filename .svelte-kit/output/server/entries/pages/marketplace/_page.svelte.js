import { W as ensure_array_like, X as attr_class, T as stringify, S as pop, P as push } from "../../../chunks/index.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import { P as ProductData } from "../../../chunks/ProductData.js";
import { e as escape_html, a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function getBadgeColor(status) {
    if (status === "eco-friendly") return "bg-green-500";
    if (status === "recycle") return "bg-blue-500";
    return "bg-purple-500";
  }
  let categories = [
    ...new Set(ProductData.map((product) => product.category))
  ];
  let selectedCategory = "All";
  let interval;
  const filterProducts = () => {
    return ProductData;
  };
  const itemsPerPage = 15;
  Math.ceil(filterProducts().length / itemsPerPage);
  function stopAutoSlide() {
    clearInterval(interval);
  }
  onDestroy(() => {
    stopAutoSlide();
  });
  const each_array = ensure_array_like(categories);
  const each_array_1 = ensure_array_like(ProductData);
  $$payload.out += `<main class="w-full flex flex-col items-center"><div class="lg:w-[1200px] w-full p-5 flex flex-col gap-5"><div class="carousel w-full rounded-lg overflow-hidden"><div id="item1" class="carousel-item w-full"><img src="images/banner1.png" class="w-full object-cover" alt="Banner 1"></div> <div id="item2" class="carousel-item w-full"><img src="images/banner2.png" class="w-full object-cover" alt="Banner 2"></div> <div id="item3" class="carousel-item w-full"><img src="images/banner3.png" class="w-full object-cover" alt="Banner 3"></div></div> <div class="absolute top-1/2 transform -translate-y-1/2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"><button class="btn btn-circle btn-success bg-black/50 border-none text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg></button></div> <div class="absolute top-1/2 transform -translate-y-1/2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><button class="btn btn-circle btn-success bg-black/50 border-none text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></button></div></div> <section class="product"><div class="flex w-[1200px] gap-3"><aside class="w-1/4 p-4"><div class="card shadow-lg w-full border-solid"><div class="card-body"><h2 class="text-xl font-bold mb-4">Categories</h2> <ul><li class="mb-2"><button${attr_class(`text-left w-full ${stringify("font-bold")}`)}>All</button></li> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<li class="mb-2"><button${attr_class(`text-left w-full ${stringify(selectedCategory === category ? "font-bold" : "")}`)}>${escape_html(category)}</button></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></aside> <div class="lg:w-[1200px] w-full place-items-center grid lg:grid-cols-4 lg:gap-4 gap-2 md:grid-cols-3 grid-cols-2 overflow-x-hidden"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let product = each_array_1[$$index_1];
    $$payload.out += `<div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72 shadow-sm hover:shadow-2xl hover:shadow-slate-200"><figure class="lg:w-56 sm:w-48 w-40 h-40"><img class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"${attr("src", product.image)}${attr("alt", product.title)}></figure> <div class="card-body p-2 gap-1"><h2 class="card-title line-clamp-2 font-light md:text-base text-sm">${escape_html(product.title)}</h2> <p class="font-bold">Rp. ${escape_html(formatPrice(product.discount > 0 ? product.price - product.price * product.discount / 100 : product.price))}</p> `;
    if (product.discount > 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex gap-2 just text-xs"><p class="line-through text-gray-400 max-w-min">Rp. ${escape_html(formatPrice(product.price))}</p> <span class="text-xs text-red-400 font-bold max-w-min">${escape_html(product.discount)}%</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="flex items-center gap-1"><div class="rating rating-xs"><div class="mask mask-star bg-orange-400" aria-current="true"></div></div> <div class="text-xs">${escape_html(product.average_ratings)} | <div${attr_class(`badge badge-xs ${stringify(getBadgeColor(product.status))} font-bold text-white`)}>${escape_html(product.status)}</div></div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section></main>`;
  pop();
}
export {
  _page as default
};
