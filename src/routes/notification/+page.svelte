<script>
    import { writable } from 'svelte/store';

    const notifications = writable([
        { id: 1, type: 'Pengiriman', message: 'Pesanan Anda sedang dikirim', date: '2025-03-01' },
        { id: 2, type: 'Pembelian', message: 'Pembelian berhasil', date: '2025-03-02' },
        { id: 3, type: 'Pengiriman', message: 'Pesanan Anda telah sampai', date: '2025-03-03' },
        { id: 4, type: 'Pembelian', message: 'Pembayaran diterima', date: '2025-03-04' },
        // Tambahkan data notifikasi lainnya di sini
    ]);

    const filterType = writable('Semua Notifikasi');

    function setFilter(type) {
        filterType.set(type);
    }

    $: filteredNotifications = $notifications.filter(notification => 
        $filterType === 'Semua Notifikasi' || notification.type === $filterType
    );
</script>

<main class="container mx-auto p-10">
    <div class="container flex flex-col gap-5">
        <div class="flex justify-between items-center">
            <button on:click={() => setFilter('Semua Notifikasi')} class="btn btn-primary">Semua Notifikasi</button>
            <button on:click={() => setFilter('Pengiriman')} class="btn btn-primary">Pengiriman</button>
            <button on:click={() => setFilter('Pembelian')} class="btn btn-primary">Pembelian</button>
        </div>
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th class="px-4 py-2">No</th>
                    <th class="px-4 py-2">Semua Notifikasi</th>
                    <th class="px-4 py-2">Pengiriman</th>
                    <th class="px-4 py-2">Pembelian</th>
                </tr>
            </thead>
            <tbody>
                {#each filteredNotifications as notification, index}
                    <tr>
                        <td class="border px-4 py-2">{index + 1}</td>
                        <td class="border px-4 py-2" colspan="3">{notification.message}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>

<style>
    .btn {
        padding: 0.5rem 1rem;
        border: none;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        border-radius: 0.25rem;
    }

    .btn-primary {
        background-color: #007bff;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }

    .table-auto {
        width: 100%;
        border-collapse: collapse;
    }

    .table-auto th, .table-auto td {
        border: 1px solid #ddd;
        padding: 0.5rem;
    }

    .table-auto th {
        background-color: #f8f8f8;
    }
</style>