<script>
    let name = '';
    let email = '';
    let password = '';

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };
</script>
<div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-3xl max-w-4xl shadow-xl grid grid-cols-1 md:grid-cols-2">
        <div class="card w-96 max-w-4xl bg-white shadow-xl p-6 rounded-bl-lg rounded-tl-lg  grid grid-cols-1 md:grid-cols-1 gap-6">
            <div class="container-title grid-cols-1 grid gap-2">
                <h1 class="text-3xl text-center font-bold">REGISTER</h1>
                <h4 class="text-md text-center">Selamat datang di Rajulang! Tukar pakaian bekasmu disini!</h4>
            </div>
            <form on:submit={handleSubmit} class="grid grid-cols-1 gap-6">
                <div class="form-group grid grid-cols-1 gap-3">
                    <div class="form-control">
                        <label for="name" class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="name" id="name" bind:value={name} class="input input-bordered w-full" required />
                    </div>
                    <div class="form-control">
                        <label for="email" class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" id="email" bind:value={email} class="input input-bordered w-full" required />
                    </div>
                    <div class="form-control">
                        <label for="password" class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" id="password" bind:value={password} class="input input-bordered w-full" required />
                        <a href="/login" class="text-xs">Sudah punya akun? Login segera!</a>
                    </div>
                </div>
                
                <div class="container-button grid grid-cols-1 gap-2">
                    <button type="submit" class="btn btn-primary w-full text-md">Register</button>
                    <p class="text-sm font-bold text-center">OR</p>
                    <button class="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <button class="btn bg-[#1A77F2] text-white border-[#005fd8]">
                        <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                        Login with Facebook
                    </button>
                </div>
                
            </form>
        </div>
        <div class="block h-full border border-gray-300 rounded-tr-lg rounded-br-lg" style="background-image: url('https://immago.com/wp-content/uploads/2023/08/apparel-industry-today.jpeg'); background-size: cover; background-position: center;">
        </div>
    </div>
    
</div>