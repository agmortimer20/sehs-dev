<script>
  import { onMount } from "svelte";

  let red = 0;
  let green = 0;
  let blue = 0;
  let alpha = 1;
  let hex = "#000000";
  let alphaTooltip;
  $: rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  $: {
    // Generate hex value from rgb decimal values
    let redHex = red.toString(16);
    let greenHex = green.toString(16);
    let blueHex = blue.toString(16);
    hex =
      (redHex.length == 1 ? "0" + redHex : redHex) +
      (greenHex.length == 1 ? "0" + greenHex : greenHex) +
      (blueHex.length == 1 ? "0" + blueHex : blueHex);
  }

  onMount(async () => {
    const Tooltip = await import("bootstrap/js/dist/tooltip");
    new Tooltip.default(alphaTooltip);
  });
</script>

<div class="col-sm-12 col-md-4 p-1">
  <label class="form-label" for="red">Red: {red}</label>
  <input
    type="range"
    class="form-range"
    min="0"
    max="255"
    step="1"
    bind:value={red}
  />
  <label class="form-label" for="red">Green: {green}</label>
  <input
    type="range"
    class="form-range"
    min="0"
    max="255"
    step="1"
    bind:value={green}
  />
  <label class="form-label" for="red">Blue: {blue}</label>
  <input
    type="range"
    class="form-range"
    min="0"
    max="255"
    step="1"
    bind:value={blue}
  />
  <label class="form-label" for="red">
    Alpha: {alpha}
    <span
      class="border"
      title="opacity"
      data-bs-placement="right"
      bind:this={alphaTooltip}>❔</span
    >
  </label>
  <input
    type="range"
    class="form-range"
    min="0"
    max="1"
    step="0.01"
    bind:value={alpha}
  />
</div>
<div class="col-sm col-md-4 p-1">
  <div class="color-square" style="background-color: {rgba};" />
  <p>Hex: {hex}</p>
</div>

<style>
  .color-square {
    border-radius: 5px;
    min-width: 250px;
    height: 250px;
    border: 2px solid black;
  }
</style>
