<script>
	import { LayerCake, Svg, Html } from 'layercake';
	import { scaleSequential } from 'd3-scale';
	import { interpolateYlOrRd, interpolateReds, interpolateInferno } from 'd3-scale-chromatic';
	import ArcSvgSpiral from './ArcSvgSpiral.svelte';
	import AxesLines from './AxesLines.svelte';
	import Legend from './Legend.svelte';
	import YearAnotations from './YearAnotations.svelte';
	import { selectedRegion } from '$lib/stores/selectStore.js';

	export let data = [];
	export let z = 'fwi';
	export let region = 'Central';
	export let parentWidth, parentHeight;

	// TODO Rotate the spiral so that mid-January is align with y axis
	const angleRotate = 360 / 4.8;
	const minSpiralSize = 500;
	$: minParentDim = parentWidth < parentHeight ? parentWidth : parentHeight;
	$: minDim = minParentDim < minSpiralSize ? minSpiralSize : minParentDim;
	$: console.log('parent dims', parentWidth, parentHeight);
</script>

<LayerCake
	xRange={[(minDim / 2) * 0.35, minDim / 2]}
	x="date"
	xPadding={[20, 20]}
	y="doy"
	yRange={[0 + angleRotate, 360 + angleRotate]}
	yDomain={[0, 365]}
	{z}
	zScale={scaleSequential(interpolateReds)}
	{data}
>
	<Svg>
		<ArcSvgSpiral {data} />
		<AxesLines />
	</Svg>
	<Legend>
		<span slot="legend-title">
			<h2 class="font-bold text-lg">{z}</h2>
			<br /><span style="opacity: 0.6">In</span> <strong>{$selectedRegion}</strong>
			<br /><span style="opacity: 0.6">(Maximum daily value)</span>
		</span>
	</Legend>
	<Html>
		<YearAnotations />
	</Html>
</LayerCake>
