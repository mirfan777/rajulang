<h1>Created by Maulana Irfan | Fahri ferdinnansya | Rio Radiansyah</h1>

pardon?
<script>
// @ts-nocheck

    import { base } from '$app/paths';
	let count = 0;

    let modal;
  
  function openModal() {
    modal.showModal();
  }
</script>
  
  <!-- Open the modal using the Svelte way -->
  <button class="btn" on:click={openModal}>open modal</button>
  <dialog id="my_modal_1" class="modal" bind:this={modal}>
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
