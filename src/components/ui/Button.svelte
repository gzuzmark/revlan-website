<script>
  export let href = null;
  export let block = false;
  export let size = "lg";
  export let style = "primary";
  let className = "";
  export { className as class };
  export let rest = {};

  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2",
  };

  const styles = {
    outline:
      "bg-white text-primary border-2 border-primary hover:bg-primary-hover hover:text-white",
    primary:
      "bg-primary text-secondary hover:bg-primary-hover  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent",
    secondary:
      "bg-purple text-white hover:bg-purple-light hover:text-black border-2 border-transparent",
  };

  const baseClasses = [
    "rounded-md text-center text-xl transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className,
  ];
</script>

{#if href}
  <a {href} {...rest} class={` ${className} ${baseClasses.join(" ")}`}>
    <slot />
  </a>
{:else}
  <button on:click {...rest} class={` ${className} ${baseClasses.join(" ")}`}>
    <slot />
  </button>
{/if}
