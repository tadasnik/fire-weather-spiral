<script>
  import { Spinner } from "flowbite-svelte";
  import Spiral from "$lib/components/time-spiral/Spiral.svelte";
  // import data from "$lib/data/fire_weather_region_int_2023_11_02.json";
  import {
    variables,
    selectedVariable,
    regions,
    selectedRegion,
  } from "$lib/stores/selectStore.js";
  /** @type {import('./$types').PageData} */
  export let data;

  let w, h;
  let isLoading = false;
  $: console.log(data);
  $: filteredData = data.events[$selectedRegion];
</script>

<div class="h-full flex relative">
  {#if isLoading}
    <div class="loading">Loading...</div>
  {:else if filteredData}
    <div class="h-full w-full" bind:clientWidth={w} bind:clientHeight={h}>
      <Spiral
        data={filteredData}
        z={$selectedVariable[0]}
        parentWidth={w}
        parentHeight={h}
      />
    </div>
  {:else}
    <p>No data</p>
  {/if}
</div>

<style>
  .loading {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    color: #999;
    font-style: italic;
  }
</style>
