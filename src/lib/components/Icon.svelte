<Svg {label} {width} {height} {box} style={combinedStyle}
  {spin} {flip} {inverse} {pulse} class={className}>
  <slot>
    {#if iconData}
      {#if iconData.paths}
        {#each iconData.paths as path}
        <path {...path}/>
        {/each}
      {/if}
      {#if iconData.polygons}
        {#each iconData.polygons as polygon}
        <polygon {...polygon}/>
        {/each}
      {/if}
      {#if iconData.raw}
        <Raw bind:data={iconData} />
      {/if}
    {/if}
  </slot>
</Svg>

<script lang="ts">
  interface SvgOpts {
    label: string
    width: number
    height: number
    style: string
    box: string
    spin: boolean
    inverse: boolean
    pulse: boolean
    class: string
  }

  import Raw from './svg/Raw.svelte';
  import Svg from './svg/Svg.svelte';

  import type { IconDefinition, IconPathData } from '@fortawesome/fontawesome-svg-core';

  let className = "";

  let opts: SvgOpts = {
    label: '',
    width: -1,
    height: -1,
    style: '',
    box: '',
    spin: false,
    inverse: false,
    pulse: false,
    class: ''
  }

  export let data: IconType;
  let iconData: IconData | undefined;
  export let scale = 1;
  export let spin = false;
  export let inverse = false;
  export let pulse = false;
  export let flip: string = '';
  export let label: string = '';
  export let style: string = '';
  export { className as class };
  let width: number | undefined;
  let height: number | undefined;

  type IconType = Record<string, IconData> | IconDefinition;

  // internal
  let childrenHeight = 0;
  let childrenWidth = 0;
  let outerScale = 1;

  // let width: number;
  // let height: number;
  let combinedStyle: string;
  let box: string;

  function normaliseData(data: IconType): IconData | undefined {
    let name: string;
    let iconData: IconData;
    if (!data) {
      return undefined;
    } else if ('iconName' in data && 'icon' in data) {
      name = data.iconName as string;
      // if (Array.length(data.icon))
      let paths = []
      const [width, height,,, path] = (data.icon as [number, number, string[], string, IconPathData]);
      if (Array.isArray(path)) {
        paths = path;
      } else {
        paths = [path];
      }
      iconData = {
        width,
        height,
        paths: paths.map((path) => { return { d: path } })
      }
    } else {
      name = Object.keys(data)[0];
      iconData = data[name];
    }
    return iconData;
  }

  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== 'undefined') {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) { // eslint-disable-line no-restricted-globals
      console.warn('Invalid prop: prop "scale" should be a number over 0.'); // eslint-disable-line no-console
      return outerScale;
    }
    return numScale * outerScale;
  }

  function calculateBox() {
    if (iconData) {
      return `0 0 ${iconData.width} ${iconData.height}`;
    }
    return `0 0 ${width} ${height}`;
  }

  function calculateRatio() {
    if (!iconData) {
      return 1;
    }
    return Math.max(iconData.width, iconData.height) / 16;
  }

  function calculateWidth() {
    if (childrenWidth) {
      return childrenWidth;
    }
    if (iconData) {
      return (iconData.width / calculateRatio()) * normalisedScale();
    }
    return 0;
  }

  function calculateHeight() {
    if (childrenHeight) {
      return childrenHeight;
    }
    if (iconData) {
      return (iconData.height / calculateRatio()) * normalisedScale();
    }
    return 0;
  }

  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return '';
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(';')) {
      combined += '; ';
    }
    return `${combined}font-size: ${size}em`;
  }

   $: {
    iconData = normaliseData(data);
    style;
    scale;
    width = calculateWidth();
    height = calculateHeight();
    combinedStyle = calculateStyle();
    box = calculateBox();
  }
</script>
