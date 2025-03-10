import { V as getContext, Z as store_get, W as ensure_array_like, X as attr_class, T as stringify, _ as unsubscribe_stores, S as pop, P as push } from "../../../../../chunks/index.js";
import { P as ProductData } from "../../../../../chunks/ProductData.js";
import "../../../../../chunks/client.js";
import { a as attr, e as escape_html } from "../../../../../chunks/attributes.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let discountedPrice;
  let product;
  let productId;
  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function getBadgeColor(status) {
    if (status === "eco-friendly") return "bg-green-500";
    if (status === "recycle") return "bg-blue-500";
    return "bg-purple-500";
  }
  productId = store_get($$store_subs ??= {}, "$page", page).params.id;
  product = ProductData.find((p) => p.id == Number(productId));
  discountedPrice = product?.discount ? product.price - product.price * product.discount / 100 : (
    // @ts-ignore
    product.price
  );
  $$payload.out += `<main class="container mx-auto p-4">`;
  if (product) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(product.comments);
    const each_array_2 = ensure_array_like([1, 2, 3, 4]);
    $$payload.out += `<div class="card lg:card-side bg-base-100 shadow-xl mb-8"><figure class="lg:w-1/2 h-64 lg:h-full"><img${attr("src", product.image)}${attr("alt", product.title)} class="w-full h-full object-cover"></figure> <div class="card-body lg:w-1/2"><div class="breadcrumbs text-sm mb-2"><ul><li><a href="/">Marketplace</a></li> <li><a${attr("href", `/category/${stringify(product.category)}`)}>${escape_html(product.category)}</a></li> <li>${escape_html(product.title)}</li></ul></div> <h2 class="card-title text-xl md:text-2xl">${escape_html(product.title)}</h2> <div class="flex items-center gap-2 my-1"><div${attr_class(`badge badge-xs text-xs text-white font-bold p-2 ${stringify(getBadgeColor(product.status))}`)}>${escape_html(product.status)}</div></div> <div class="flex items-center gap-2 mt-1 mb-2"><div class="rating rating-sm"><div class="mask mask-star-2 bg-orange-400"></div></div> <span class="text-sm">${escape_html(product.average_ratings)} (${escape_html(product.comments.length)} ulasan)</span></div> <div class="my-2"><p class="font-bold text-lg">Rp. ${escape_html(formatPrice(discountedPrice))}</p> `;
    if (product.discount > 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex gap-2 text-xs mt-1"><p class="line-through text-gray-400 max-w-min">Rp. ${escape_html(formatPrice(product.price))}</p> <span class="text-xs text-red-400 font-bold max-w-min">${escape_html(product.discount)}%</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <p class="text-sm text-gray-600 my-2">${escape_html(product.product_desc)}</p> <div class="collapse collapse-arrow bg-base-200 my-2"><input type="checkbox"> <div class="collapse-title text-sm font-medium">Detail Produk</div> <div class="collapse-content"><p class="text-sm">${escape_html(product.detailed_product)}</p></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-outline">Tambah ke Keranjang</button> <button class="btn btn-success">Beli Sekarang</button></div></div></div> <div class="bg-base-100 shadow-xl p-6 rounded-box"><h3 class="text-xl font-bold mb-4">Ulasan Pembeli (${escape_html(product.comments.length)})</h3> <!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let comment = each_array[i];
      const each_array_1 = ensure_array_like(Array(5));
      $$payload.out += `<div${attr_class(`py-4 ${stringify(i < product.comments.length - 1 ? "border-b" : "")}`)}><div class="flex justify-between items-center mb-2"><p class="font-semibold">${escape_html(comment.user)}</p> <div class="flex items-center gap-1"><div class="rating rating-sm"><!--[-->`;
      for (let i2 = 0, $$length2 = each_array_1.length; i2 < $$length2; i2++) {
        each_array_1[i2];
        $$payload.out += `<input type="radio" class="mask mask-star-2 bg-orange-400"${attr("checked", comment.rating === i2 + 1, true)} disabled>`;
      }
      $$payload.out += `<!--]--></div></div></div> <p class="text-sm">${escape_html(comment.body)}</p></div>`;
    }
    $$payload.out += `<!--]--> `;
    if (product.comments.length === 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-center py-4 text-gray-500">Belum ada ulasan untuk produk ini</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="mt-8"><h3 class="text-xl font-bold mb-4">Produk Serupa</h3> <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let i = each_array_2[$$index_2];
      $$payload.out += `<div class="card bg-base-100 w-full shadow-sm hover:shadow-xl transition-shadow"><figure class="h-40"><img src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Similar Product" class="w-full h-full object-cover"></figure> <div class="card-body p-3 gap-1"><h2 class="card-title line-clamp-2 font-light text-sm">Cardigan Anak Similar #${escape_html(i)}</h2> <p class="font-bold">Rp. 135.000</p> <div class="flex gap-2 text-xs"><p class="line-through text-gray-400 max-w-min">Rp. 150.000</p> <span class="text-xs text-red-400 font-bold max-w-min">10%</span></div> <div class="flex items-center gap-1"><div class="rating rating-xs"><div class="mask mask-star bg-orange-400"></div></div> <div class="text-xs">4.8 | <div class="badge badge-xs bg-green-500 font-bold text-white">eco-friendly</div></div></div></div></div>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex justify-center items-center h-64"><p class="text-lg">Produk tidak ditemukan</p></div>`;
  }
  $$payload.out += `<!--]--></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
