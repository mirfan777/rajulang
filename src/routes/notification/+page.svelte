<script>
    import { writable } from 'svelte/store';

    const notifications = writable([
        { id: 1, type: 'Pengiriman', message: 'Pesanan Anda sedang dikirim', date: '2025-03-01' },
        { id: 2, type: 'Pembelian', message: 'Pembelian berhasil', date: '2025-03-02' },
        { id: 3, type: 'Pengiriman', message: 'Pesanan Anda telah sampai', date: '2025-03-03' },
        { id: 4, type: 'Pembelian', message: 'Pembayaran diterima', date: '2025-03-04' },
        { id: 5, type: 'Pengiriman', message: 'Pesanan Anda sedang diproses', date: '2025-03-05' },
        { id: 6, type: 'Pembelian', message: 'Pesanan Anda telah dikonfirmasi', date: '2025-03-06' },
        { id: 7, type: 'Pengiriman', message: 'Pesanan Anda sedang dalam perjalanan', date: '2025-03-07' },
        { id: 8, type: 'Pembelian', message: 'Pembelian Anda telah diverifikasi', date: '2025-03-08' },
        { id: 9, type: 'Pengiriman', message: 'Pesanan Anda telah diterima', date: '2025-03-09' },
        { id: 10, type: 'Pembelian', message: 'Pembayaran Anda telah dikonfirmasi', date: '2025-03-10' },
        { id: 11, type: 'Pengiriman', message: 'Pesanan Anda sedang dikemas', date: '2025-03-11' },
        { id: 12, type: 'Pembelian', message: 'Pembelian Anda telah berhasil', date: '2025-03-12' },
        { id: 13, type: 'Pengiriman', message: 'Pesanan Anda sedang dalam pengiriman', date: '2025-03-13' },
        { id: 14, type: 'Pembelian', message: 'Pembayaran Anda telah diterima', date: '2025-03-14' }
    ]);

    const filterType = writable('Semua Notifikasi');

    // @ts-ignore
    function setFilter(type) {
        filterType.set(type);
    }

    $: filteredNotifications = $notifications.filter(notification => 
        $filterType === 'Semua Notifikasi' || notification.type === $filterType
    );

    // Helper function to get badge color based on notification type
    // @ts-ignore
    function getBadgeColor(type) {
        return type === 'Pengiriman' ? 'badge-success' : 'badge-accent';
    }
</script>

<main class="container mx-auto p-4 md:p-6 lg:p-8 bg-base-200 min-h-screen">
    <div class="bg-base-100 shadow-xl rounded-box p-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 class="text-2xl font-bold mb-4 md:mb-0">Notifikasi Anda</h2>
            <div class="flex gap-2 flex-wrap">
                <button class="btn btn-sm {$filterType === 'Semua Notifikasi' ? 'btn-success' : 'btn-outline'}" 
                        on:click={() => setFilter('Semua Notifikasi')}>
                    Semua Notifikasi
                </button>
                <button class="btn btn-sm {$filterType === 'Pengiriman' ? 'btn-success' : 'btn-outline'}" 
                        on:click={() => setFilter('Pengiriman')}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-5h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-4a1 1 0 00-1-1h-8a1 1 0 00-1 1v1H3z" />
                    </svg>
                    Pengiriman
                </button>
                <button class="btn btn-sm {$filterType === 'Pembelian' ? 'btn-success' : 'btn-outline'}" 
                        on:click={() => setFilter('Pembelian')}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                        <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Pembelian
                </button>
            </div>
        </div>

        <!-- Counter -->
        <!-- <div class="mb-4">
            <div class="stats bg-base-200 shadow">
                <div class="stat">
                    <div class="stat-title">Total Notifikasi</div>
                    <div class="stat-value text-success">{filteredNotifications.length}</div>
                    <div class="stat-desc">{$filterType}</div>
                </div>
            </div>
        </div> -->

        <!-- Notifications List -->
        {#if filteredNotifications.length === 0}
            <div class="alert alert-info shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Tidak ada notifikasi untuk ditampilkan.</span>
                </div>
            </div>
        {:else}
            <div class="divide-y divide-base-300">
                {#each filteredNotifications as notification}
                    <div class="py-4 hover:bg-base-200 transition-all duration-200">
                        <div class="flex items-start justify-between">
                            <div class="flex items-start space-x-4">
                                <!-- Icon based on notification type -->
                                <div class="avatar placeholder">
                                    <div class="bg-base-300 text-base-content rounded-full w-12 h-12 flex items-center justify-center">
                                        {#if notification.type === 'Pengiriman'}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                            </svg>
                                        {:else}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        {/if}
                                    </div>
                                </div>
                                
                                <!-- Content -->
                                <div class="flex-1">
                                    <div class="flex items-center">
                                        <span class="badge {getBadgeColor(notification.type)} mr-2">
                                            {notification.type}
                                        </span>
                                        <span class="text-xs text-base-content opacity-60 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {notification.date}
                                        </span>
                                    </div>
                                    <h3 class="font-medium text-base-content mt-1">{notification.message}</h3>
                                    <div class="mt-2 flex space-x-2">
                                        <button class="btn btn-xs btn-ghost">Lihat Detail</button>
                                        <button class="btn btn-xs btn-ghost text-error">Hapus</button>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Status indicator -->
                            <div class="flex flex-col items-end">
                                <div class="badge badge-sm badge-outline">Baru</div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-8">
                <div class="btn-group">
                    <button class="btn btn-sm">«</button>
                    <button class="btn btn-sm btn-active">1</button>
                    <button class="btn btn-sm">2</button>
                    <button class="btn btn-sm">3</button>
                    <button class="btn btn-sm">»</button>
                </div>
            </div>
        {/if}
    </div>
</main>