<script>
	import '../app.css';
	import { base } from '$app/paths'
	let { children } = $props();
</script>

<div class="navbar bg-[#6B8F3D] shadow-sm">
	<div class="navbar-start">
	  <div class="dropdown z-[9999999999999999999999999]">
		<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
		</div>
		<!-- menu responsive -->
		<ul
		  tabindex="0"
		  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
		  <li><a href="{base}/temutukar">TemuTukar</a></li>
		  <li><a href="{base}/temutukar">Artikel</a></li>
		  <li><a href="{base}/marketplace">Marketplace</a></li>
		</ul>
	  </div>
	  <a class="btn btn-ghost hover:bg-[#3e6235] hover:border-[#3e6235] text-xl p-6" href="{base}/"><img src="images/logo_fillnobg.png" class="w-36 h-10" alt="logo"></a>
	</div>
	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal px-1 text-white">
		<li><a href="{base}/temutukar">TemuTukar</a></li>
		<li><a href="{base}/artikel">Artikel</a></li>
		<li><a href="{base}/marketplace">Marketplace</a></li>
	  </ul>
	</div>
	<!-- rightnav -->
	<div class="navbar-end mx-5">
		<div class="flex-none">
			<div class="dropdown dropdown-end">
			  <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
			  </div>
			  <div
				tabindex="0"
				class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
				<div class="card-body">
				  <span class="text-lg font-bold">8 Items</span>
				  <span class="text-info">Subtotal: $999</span>
				  <div class="card-actions">
					<button class="btn btn-success btn-block">View cart</button>
				  </div>
				</div>
			  </div>
			</div>
			<div class="dropdown dropdown-end">
			  <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
				  <img
					alt="Tailwind CSS Navbar component"
					src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
				</div>
			  </div>
			  <ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
				<li>
				  <a class="justify-between">
					Profile
					<span class="badge">New</span>
				  </a>
				</li>
				<li><a>Settings</a></li>
				<li><a>Logout</a></li>
			  </ul>
			</div>
		  </div>
	</div>
</div>

{@render children()}

<footer class="footer sm:footer-horizontal bg-base-300 text-base-content p-10 mt-10">
	<nav>
	  <h6 class="footer-title">Services</h6>
	  <a class="link link-hover">Branding</a>
	  <a class="link link-hover">Design</a>
	  <a class="link link-hover">Marketing</a>
	  <a class="link link-hover">Advertisement</a>
	</nav>
	<nav>
	  <h6 class="footer-title">Company</h6>
	  <a class="link link-hover">About us</a>
	  <a class="link link-hover">Contact</a>
	  <a class="link link-hover">Jobs</a>
	  <a class="link link-hover">Press kit</a>
	</nav>
	<nav>
	  <h6 class="footer-title">Social</h6>
	  <div class="grid grid-flow-col gap-4">
		<a>
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			class="fill-current">
			<path
			  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
		  </svg>
		</a>
		<a>
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			class="fill-current">
			<path
			  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
		  </svg>
		</a>
		<a>
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			class="fill-current">
			<path
			  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
		  </svg>
		</a>
	  </div>
	</nav>
  </footer>

<div class="dock z-[999999999] sm:invisible visible">
	<button>
	  <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></line></g></svg>
	  <span class="dock-label">Home</span>
	</button>
	
	<button class="dock-active">
	  <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></rect></g></svg>
	  <span class="dock-label">Inbox</span>
	</button>
	
	<button>
	  <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
	  <span class="dock-label">Settings</span>
	</button>
  </div>

