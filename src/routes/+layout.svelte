<script>
	import '../app.css';
	import { base } from '$app/paths'
	let { children } = $props();
</script>

<div class="navbar px-6 bg-base-100 shadow-sm">
	<div class="navbar-start">
	  <div class="dropdown">
		<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
		</div>
		<ul
		  tabindex="0"
		  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
		  <li><a href="{base}/temutukar">TemuTukar</a></li>
		  <li><a>Item 3</a></li>
		</ul>
	  </div>
	  <a class="btn btn-ghost text-xl" href="{base}/">Rajulang</a>
	</div>
	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal px-1 text-lg">
		<li><a href="/tentang">Tentang</a></li>
		<li><a href="{base}/temutukar">TemuTukar</a></li>
		<li><a href="/artikel">Komuntitas</a></li>
		<li><a href="/marketplace">Marketplace</a></li>
	  </ul>
	</div>
	<div class="navbar-end">
		<div class="end flex gap-6">
			<a href="/marketplace/cart">
				<img src="/src/assets/cart.svg" alt="cart" class="w-7" />
				
			</a>
			<div class="dropdown">
				<img role="button" tabindex="0" src="https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="Profile" class="border-solid border w-10 h-10 rounded-full">
				
				<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm mr-5">
				  <li><a href="/login">Login</a></li>
				  <li><a href="/profile">Profile</a></li>
				</ul>
			</div>
		</div>
		
	</div>
</div>

{@render children()}

