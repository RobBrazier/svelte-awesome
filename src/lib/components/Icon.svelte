<Svg
  {label}
  {width}
  {height}
  {box}
  style={combinedStyle}
  {spin}
  {flip}
  {inverse}
  {pulse}
  class={className}
  {...$$restProps}
>
  <slot>
    {#if iconData}
      {#if iconData.paths}
        {#each iconData.paths as path}
          <path {...path} />
        {/each}
      {/if}
      {#if iconData.polygons}
        {#each iconData.polygons as polygon}
          <polygon {...polygon} />
        {/each}
      {/if}
      {#if iconData.raw}
        <Raw bind:data={iconData} />
      {/if}
    {/if}
  </slot>
</Svg>

<script context="module" lang="ts">
  export interface FaIconDefinition {
    prefix: string;
    iconName: string;
    icon: [
      number, // width
      number, // height
      string[], // ligatures
      string, // unicode
      string | string[] // svgPathData
    ];
  }

  export interface IconPath {
    id?: string;
    d: string;
    style?: string;
    stroke?: string;
  }

  export interface IconPolygon {
    points: string;
    style?: string;
  }

  export interface IconData {
    width: number;
    height: number;
    paths?: IconPath[];
    polygons?: IconPolygon[];
    raw?: string;
  }

  export type IconType = Record<string, IconData> | FaIconDefinition;
</script>

<script lang="ts">
  import Raw from './svg/Raw.svelte';
  import Svg from './svg/Svg.svelte';

  let className = '';

  export let data: IconType;
  let iconData: IconData | undefined;
  export let scale = 1;
  export let spin = false;
  export let inverse = false;
  export let pulse = false;
  export let flip: 'horizontal' | 'vertical' | undefined = undefined;
  export let label: string = '';
  export let style: string = '';
  export { className as class };

  // internal
  let childrenHeight = 0;
  let childrenWidth = 0;
  let outerScale = 1;

  let width: number = 10;
  let height: number = 10;
  let combinedStyle: string;
  let box: string;

  function normaliseData(data: IconType): IconData | undefined {
    let name: string;
    let iconData: IconData;
    if (!data) {
      return undefined;
    } else if ('definition' in data) {
      console.error(
        "`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead"
      );
      return undefined;
    } else if ('iconName' in data && 'icon' in data) {
      name = data.iconName as string;
      let paths = [];
      // fontawesome v5/6 icon imported with:
      // import { iconName } from '@fortawesome/packagename/iconName';
      // import { iconName } from '@fortawesome/packagename';
      const [width, height, , , path] = data.icon as Exclude<IconType['icon'], IconData>;
      if (Array.isArray(path)) {
        paths = path;
      } else {
        paths = [path];
      }
      iconData = {
        width,
        height,
        paths: paths.map((path) => {
          return { d: path };
        })
      };
    } else {
      // inbuilt icons
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
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
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
    let combined = '';
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
    if (combined !== '' && !combined.endsWith(';')) {
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
