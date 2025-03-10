<script>
    import Users from "../../data/UserData";
    import { onMount } from 'svelte';

    let user = {
        name: '',
        email: '',
        bio: '',
        profilePicture: ''
    };

    onMount(() => {
        const fetchedUser = Users[0]; // Fetch the first user
        if (fetchedUser) {
            user = {
                name: fetchedUser.name,
                email: fetchedUser.email,
                bio: fetchedUser.bio, // Add a sample bio
                profilePicture: 'https://th.bing.com/th/id/OIP.SeO6MaDpxlP5Uc092hn_cgAAAA?rs=1&pid=ImgDetMain' // Add a sample profile picture URL
            };
        }
    });
</script>

<main class="p-10">
    <div class="card shadow-lg">
        <div class="card-body flex flex-col items-center">
            <figure class="">
                <img src={user.profilePicture} alt="Profile Picture" class="rounded-full w-32 h-32 object-cover shadow-md" />
            </figure>
            <div class="w-1/2 text-center">
                <h2 class="text-2xl font-semibold">{user.name}</h2>
                <p class="text-gray-600">{user.email}</p>
                <p class="text-gray-500 mt-2">{user.bio}</p>
            </div>
            <div class="flex flex-col items-center space-y-2 mt-4">
                <button class="btn btn-primary w-full">Edit Profile</button>
                <button class="btn btn-secondary w-full">Settings</button>
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
