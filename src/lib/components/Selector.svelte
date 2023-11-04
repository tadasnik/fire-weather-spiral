<script lang="ts">
	import { variables, selectedVariable, regions, selectedRegion } from '$lib/stores/selectStore.js';
</script>

<div class="controls-wrapper flex-row align-top p-10">
	<div>
		<select bind:value={$selectedRegion}>
			{#each $regions as region}
				<option value={region}>{region}</option>
			{/each}
		</select>
	</div>
	<div>
		<select bind:value={$selectedVariable}>
			{#each $variables as variable}
				<option value={variable}>{variable}</option>
			{/each}
		</select>
	</div>
</div>
