import { W as ensure_array_like, Z as store_get, _ as unsubscribe_stores, S as pop, P as push } from "../../../../chunks/index.js";
import { P as ProductData } from "../../../../chunks/ProductData.js";
import { w as writable } from "../../../../chunks/index2.js";
import { a as attr, e as escape_html } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const items = writable(ProductData.map((product) => ({ ...product, selected: false, quantity: 1 })));
  const allSelected = writable(false);
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$items", items).slice(0, 10));
  $$payload.out += `<main class="container mx-auto p-10"><div class="container flex gap-5"><div class="list-cart grid grid-cols-1 gap-4 w-1/2"><div class="card shadow-sm"><div class="card-body"><div class="flex items-center"><input type="checkbox"${attr("checked", store_get($$store_subs ??= {}, "$allSelected", allSelected), true)} class="mr-2"> Select All</div></div></div> <!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    $$payload.out += `<div class="card shadow-sm"><div class="card-body p-4 rounded-md"><div class="flex gap-5"><div class="flex flex-col self-start mt-1"><input type="checkbox"${attr("checked", item.selected, true)} class="w-5 h-5"></div> <img class="w-32 h-32 object-cover rounded-lg"${attr("src", item.image)}${attr("alt", item.title)}> <div class="desc w-full grid grid-cols-1 gap-5"><div class="contain"><p class="text-xl font-semibold">${escape_html(item.title)}</p> <p class="text-lg text-gray-600">${escape_html(item.product_desc)}</p> <p class="text-lg text-gray-600">Rp ${escape_html(item.price.toLocaleString("id-ID"))}</p></div> <div class="flex justify-between items-center mt-2"><div class="flex gap-21"><div class="avg-rate flex gap-1"><p class="text-lg">Avg Rate : ${escape_html(item.Rating)}</p> <img src="icons/star.svg" alt="rate" class="w-5"></div> <div class="trash-add flex gap-3"><img src="icons/trash.svg" alt="Hapus dari whislist" class="w-5"> <img src="icons/heart.svg" alt="Tambah ke cart" class="w-5"> <div class="addorno"><div class="flex items-center border rounded-lg"><button class="px-2 py-1 bg-gray-200 rounded-lg">-</button> <span class="mx-2">${escape_html(item.quantity)}</span> <button class="px-2 py-1 bg-gray-200 rounded-lg">+</button></div></div></div></div></div></div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="card w-1/3 shadow-sm h-[15rem]"><form action=""></form> <div class="card-body grid grid-cols-1 gap-4"><form action="" class="grid grid-cols-1 gap-4"><p class="text-xl font-semibold">Ringkasan Belanja</p> <div class="grid grid-cols-1 gap-1"><div class="total-barang flex gap-16"><p class="text-lg">Total Barang :</p> <p class="text-lg">${escape_html(store_get($$store_subs ??= {}, "$items", items).slice(0, 10).reduce((total, item) => total + item.quantity, 0))} Barang</p></div> <div class="total-harga flex gap-16"><p class="text-lg">Total Harga :</p> <p class="text-lg">Rp ${escape_html(store_get($$store_subs ??= {}, "$items", items).slice(0, 10).reduce((total, item) => total + item.quantity * item.price, 0).toLocaleString("id-ID"))}</p></div> <button class="btn btn-success btn-block">Checkout</button></div></form></div></div></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
