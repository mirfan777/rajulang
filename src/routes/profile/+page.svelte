<script>
    import Users from "../../data/UserData";
    import { onMount } from 'svelte';

    let user = {
        name: '',
        email: '',
        bio: '',
        profilePicture: '',
        address: '',
        phone:''
    };

    onMount(() => {
        const fetchedUser = Users[0]; // Fetch the first user
        if (fetchedUser) {
            user = {
                name: fetchedUser.name,
                email: fetchedUser.email,
                bio: fetchedUser.bio, // Add a sample bio
                address: fetchedUser.address,
                phone: fetchedUser.phone_number,
                profilePicture: 'https://th.bing.com/th/id/OIP.SeO6MaDpxlP5Uc092hn_cgAAAA?rs=1&pid=ImgDetMain' // Add a sample profile picture URL
            };
        }
    });
</script>

<main class="w-3/4 mx-auto my-20">
    <div class="card shadow-lg">
        <div class="card-body flex flex-col items-center">
            <figure class="relative">
                <img src={user.profilePicture} alt="Profile Picture" class="rounded-full w-32 h-32 object-cover shadow-md" />
                <button id="modaledit" class="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full p-2" on:click="{() => modaledit.showModal()}" aria-label="Edit Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </figure>

            <dialog id="modaledit" class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Settings</h3>
                    <p class="py-4">Settings content goes here...</p>
                    <div class="modal-action">
                        <button class="btn" >Close</button>
                    </div>
                </div>
            </dialog>
            <div class="w-1/2 text-center">
                <h2 class="text-2xl font-semibold">{user.name}</h2>
                <div class="card shadow-lg ">
                    <div class="card-body ">
                        <div class="table-profile grid grid-cols-2 gap-3">
                            <div class="text-justify px-3">
                                <label for="email" class="text-lg">Email</label>
                                <p class="text-gray-500 mt-2 text-md p-2 border border-solid rounded-md">{user.email}</p>
                            </div>
                           
                            <div class="text-justify px-3">
                                <label for="bio" class="text-lg">Address</label>
                                <p class="text-gray-500 mt-2 text-md p-2 border border-solid rounded-md">{user.address}</p>
                            </div>
                            <div class="text-justify px-3">
                                <label for="address" class="text-lg">Bio</label>
                                <p class="text-gray-500 mt-2 text-md p-2 border border-solid rounded-md">{user.bio}</p>
                            </div>
                            <div class="text-justify px-3">
                                <label for="phone" class="text-lg">Phone</label>
                                <p class="text-gray-500 mt-2 h-[5rem] text-md p-2 border border-solid rounded-md">{user.phone}</p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</main>
<!-- <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
            <img src={user.profilePicture} alt="Profile Picture" class="rounded-full w-32 h-32" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.bio}</p>
        </div>
    </div>
</div> -->
