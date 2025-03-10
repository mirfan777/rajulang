import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
import { S as pop, P as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let user = {
    name: "",
    email: "",
    bio: "",
    profilePicture: "",
    address: "",
    phone: ""
  };
  $$payload.out += `<main class="w-3/4 mx-auto my-20"><div class="card shadow-lg"><div class="card-body flex flex-col items-center"><figure class="relative"><img${attr("src", user.profilePicture)} alt="Profile Picture" class="rounded-full w-32 h-32 object-cover shadow-md"> <button id="modaledit" class="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full p-2" aria-label="Edit Profile"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></button></figure> <dialog id="modaledit" class="modal"><div class="modal-box"><h3 class="font-bold text-lg">Settings</h3> <p class="py-4">Settings content goes here...</p> <div class="modal-action"><button class="btn">Close</button></div></div></dialog> <div class="w-1/2 text-center"><h2 class="text-2xl font-semibold">${escape_html(user.name)}</h2> <div class="card shadow-lg"><div class="card-body"><div class="table-profile grid grid-cols-2 gap-3"><div class="text-justify px-3"><label for="email" class="text-lg">Email</label> <p class="text-gray-500 mt-2 text-md p-2 border border-solid rounded-md">${escape_html(user.email)}</p></div> <div class="text-justify px-3"><label for="bio" class="text-lg">Address</label> <p class="text-gray-500 mt-2 text-md p-2 border border-solid rounded-md">${escape_html(user.address)}</p></div> <div class="text-justify px-3"><label for="address" class="text-lg">Bio</label> <p class="text-gray-500 mt-2 text-md p-2 border border-solid rounded-md">${escape_html(user.bio)}</p></div> <div class="text-justify px-3"><label for="phone" class="text-lg">Phone</label> <p class="text-gray-500 mt-2 h-[5rem] text-md p-2 border border-solid rounded-md">${escape_html(user.phone)}</p></div></div></div></div></div></div></div></main>`;
  pop();
}
export {
  _page as default
};
