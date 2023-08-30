<script lang="ts">
  import { isContactVisible } from "../store/contact";
  import Icon from "./Icon.svelte";
  import Button from "./ui/Button.svelte";
  import i18next, { t, changeLanguage } from "i18next";

  export let text: string;

  function showContactDialog() {
    isContactVisible.set(true);
  }
</script>

<Button
  on:click={showContactDialog}
  class="flex gap-1 items-center justify-center"
  block={false}>
  {text}
  <Icon icon="paper-plane" size="1.2em" />
</Button>
