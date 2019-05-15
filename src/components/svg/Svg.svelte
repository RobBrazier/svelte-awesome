<svg version="1.1" bind:this={svg} class="fa-icon"
  class:fa-spin={spin} class:fa-pulse={pulse} class:fa-inverse={inverse}
  class:fa-flip-horizontal="{flip === 'horizontal'}" class:fa-flip-vertical="{flip === 'vertical'}"
  width={width} height={height}
  role="{ label ? 'img' : 'presentation' }"
  viewBox={box}>
  <slot></slot>
</svg>

<style>
.fa-icon {
  display: inline-block;
  fill: currentColor;
}
.fa-flip-horizontal {
  transform: scale(-1, 1);
}
.fa-flip-vertical {
  transform: scale(1, -1);
}
.fa-spin {
  animation: fa-spin 1s 0s infinite linear;
}
.fa-inverse {
  color: #fff;
}
.fa-pulse {
  animation: fa-spin 1s infinite steps(8);
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
  import { afterUpdate } from 'svelte';

  let svg;

  export let width;
  export let height;
  export let box;

  export let spin = false;
  export let inverse = false;
  export let pulse = false;
  export let flip = null;

  // optionals
  export let x = false;
  export let y = false;
  export let style = false;
  export let label = false;

  afterUpdate(() => {
    if (typeof svg !== 'undefined') {
      if (x) {
        svg.setAttribute('x', x);
      }
      if (y) {
        svg.setAttribute('y', y);
      }
      if (style) {
        svg.setAttribute('style', style);
      }
      if (label) {
        svg.setAttribute('aria-label', label);
      }
    }
  });
</script>
