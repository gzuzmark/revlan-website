<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { isContactVisible } from "../store/contact";
  import ContactForm from "./ContactForm.svelte";

  const dismissModal = () => isContactVisible.set(false);
  const handleEsc = (event) => {
    if (event.key === "Escape") {
      dismissModal();
    }
  };
</script>

{#if $isContactVisible}
  <div
    class="absolute top-0 left-0 w-full h-full linear-gradient z-0"
    on:click={dismissModal}
    on:keydown={handleEsc}
    transition:fade />
  <div
    class="absolute top-0 left-0 w-full min-h-screen grid justify-center content-center pointer-events-none">
    <div
      class="container max-w-xl px-5 py-5 mx-auto z-10 pointer-events-auto bg-white rounded-lg"
      transition:fly={{ y: 200, duration: 300 }}>
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Us!
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Get in touch with our english methodology and <span class="text-primary"
          >explore more about edutainment with Revlan.</span>
      </p>
      <ContactForm />
    </div>
  </div>
{/if}

<style>
  /* .modal {
    @apply absolute top-0 left-0 w-full h-full grid justify-center content-center pointer-events-none;
  }
  .modal__backdrop {
    @apply absolute top-0 left-0 w-full h-screen opacity-50 bg-gradient-to-tr from-white to-violet-300 z-0 md:text-5xl;
  }
  .modal__cnt {
    @apply w-full z-10 pointer-events-auto;
  } */

  .linear-gradient {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  }
</style>
