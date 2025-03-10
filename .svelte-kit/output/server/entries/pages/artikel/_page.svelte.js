import { W as ensure_array_like, X as attr_class, T as stringify, S as pop, P as push } from "../../../chunks/index.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let filteredArticles;
  const articles = [
    {
      id: 1,
      title: "The Rise of Clothing Swap Events",
      summary: "How community clothing exchange events are changing the way we refresh our wardrobes while reducing textile waste.",
      date: "March 8, 2025",
      category: "Clothing Exchange",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Materials Revolutionizing Fashion",
      summary: "Exploring innovative eco-friendly fabrics from recycled ocean plastic to biodegradable alternatives.",
      date: "March 5, 2025",
      category: "Sustainable Materials",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Capsule Wardrobes: Less is More",
      summary: "How building a minimalist wardrobe with versatile, high-quality pieces can reduce consumption and increase style.",
      date: "March 1, 2025",
      category: "Minimalism",
      image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "DIY Upcycling: Give Old Clothes New Life",
      summary: "Creative techniques to transform worn-out garments into trendy new pieces without advanced sewing skills.",
      date: "February 28, 2025",
      category: "Upcycling",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "How to Host Your First Clothing Swap Party",
      summary: "A step-by-step guide to organizing a successful clothing exchange event with friends and neighbors.",
      date: "February 25, 2025",
      category: "Clothing Exchange",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Ethical Fashion Brands Making a Difference",
      summary: "Spotlight on companies prioritizing fair labor practices, sustainable materials, and transparency in their supply chains.",
      date: "February 20, 2025",
      category: "Ethical Brands",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "The True Cost of Fast Fashion",
      summary: "Understanding the environmental and social impact of disposable clothing trends and how to break the cycle.",
      date: "February 18, 2025",
      category: "Fast Fashion",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Second-Hand Shopping: Ultimate Guide",
      summary: "Tips for finding high-quality second-hand clothing treasures at thrift stores, vintage shops, and online platforms.",
      date: "February 15, 2025",
      category: "Second-Hand",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop"
    }
  ];
  const popularPosts = [
    {
      id: 1,
      title: "The Rise of Clothing Swap Events"
    },
    { id: 7, title: "The True Cost of Fast Fashion" },
    {
      id: 8,
      title: "Second-Hand Shopping: Ultimate Guide"
    }
  ];
  const categories = [
    { name: "All", count: 8 },
    { name: "Clothing Exchange", count: 2 },
    { name: "Sustainable Materials", count: 1 },
    { name: "Minimalism", count: 1 },
    { name: "Upcycling", count: 1 },
    { name: "Ethical Brands", count: 1 },
    { name: "Fast Fashion", count: 1 },
    { name: "Second-Hand", count: 1 }
  ];
  let activeCategory = "All";
  let searchQuery = "";
  filteredArticles = articles.filter((article) => {
    const matchesSearch = searchQuery === "";
    return matchesSearch;
  });
  const each_array = ensure_array_like(categories);
  const each_array_1 = ensure_array_like(filteredArticles);
  const each_array_2 = ensure_array_like(popularPosts);
  $$payload.out += `<main class="container mx-auto px-4 py-8" style="max-width: 1200px;"><h1 class="text-4xl font-bold text-center mb-6">Artikel dan Blog</h1> <div class="bg-base-200 rounded-lg p-4 mb-8"><div class="flex flex-col md:flex-row md:items-start justify-between gap-4"><div class="form-control w-full md:w-1/3"><div><input type="text" placeholder="Search articles..." class="input input-bordered w-full"${attr("value", searchQuery)}></div></div> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<button${attr_class(`btn btn-sm ${stringify(activeCategory === category.name ? "btn-success" : "btn-outline")}`)}>${escape_html(category.name)} (${escape_html(category.count)})</button>`;
  }
  $$payload.out += `<!--]--></div></div></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-6"><div class="lg:col-span-8 space-y-6">`;
  if (each_array_1.length !== 0) {
    $$payload.out += "<!--[-->";
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let article = each_array_1[i];
      $$payload.out += `<div class="card bg-base-100 shadow-xl overflow-hidden"><div class="md:flex"><figure class="md:w-1/3 h-48 md:h-auto"><img${attr("src", article.image)}${attr("alt", article.title)} class="h-full w-full object-cover"></figure> <div class="card-body md:w-2/3"><div class="flex items-center justify-between"><span class="badge bg-slate-200">${escape_html(article.category)}</span> <span class="text-sm opacity-70">${escape_html(article.date)}</span></div> <h2 class="card-title text-xl md:text-2xl">${escape_html(article.title)}</h2> <p class="text-base-content/80">${escape_html(article.summary)}</p> <div class="card-actions justify-end mt-4"><button class="btn btn-neutral btn-sm">Read More</button></div></div></div></div>`;
    }
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="alert alert-info"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>No articles found. Try adjusting your search or filter.</span></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="lg:col-span-4 space-y-6"><div class="card bg-base-200 shadow-xl sticky top-4"><div class="card-body"><h2 class="card-title">Popular Posts</h2> <ul class="menu bg-base-200 p-0"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let post = each_array_2[$$index_2];
    $$payload.out += `<li><a${attr("href", `#${stringify(post.id)}`)} class="py-2">${escape_html(post.title)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="divider my-2"></div> <h2 class="card-title">Join Our Next Swap Event</h2> <div class="bg-base-100 rounded-lg p-3 mb-3"><p class="font-medium">Jakarta Clothing Swap</p> <p class="text-sm">March 20, 2025 • 1:00 PM</p> <p class="text-sm mt-2">Bring 3-5 clean items in good condition to exchange!</p> <button class="btn btn-success btn-sm w-full mt-3">Register Now</button></div> <div class="divider my-2"></div> <h2 class="card-title">Subscribe for Updates</h2> <div class="form-control"><div class="flex flex-col gap-2"><input type="text" placeholder="Your email" class="input input-bordered w-full"> <button class="btn btn-success">Subscribe</button></div></div> <div class="divider my-2"></div> `;
  if (articles[0]) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2 class="card-title">Latest Article</h2> <div class="bg-base-100 rounded-lg overflow-hidden"><img${attr("src", articles[0].image)}${attr("alt", articles[0].title)} class="w-full h-32 object-cover"> <div class="p-3"><h3 class="font-bold">${escape_html(articles[0].title)}</h3> <p class="text-sm text-base-content/70 line-clamp-2">${escape_html(articles[0].summary)}</p> <a href="#" class="text-success text-sm mt-2 inline-block">Read more →</a></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div></div></main>`;
  pop();
}
export {
  _page as default
};
