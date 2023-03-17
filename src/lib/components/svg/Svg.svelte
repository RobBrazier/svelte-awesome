<svg
  version="1.1"
  class="fa-icon {className}"
  class:fa-spin={spin}
  class:fa-pulse={pulse}
  class:fa-inverse={inverse}
  class:fa-flip-horizontal={flip === 'horizontal'}
  class:fa-flip-vertical={flip === 'vertical'}
  {width}
  {height}
  aria-label={label}
  role={label ? 'img' : 'presentation'}
  viewBox={box}
  {style}
  {...$$restProps}
>
  <slot />
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

<script lang="ts">
  let className: string = '';

  export { className as class };

  export let width: number;
  export let height: number;
  export let box: string = '0 0 0 0';

  export let spin = false;
  export let inverse = false;
  export let pulse = false;
  export let flip: string = 'none';

  // optionals
  export let style: string = '';
  export let label: string = '';
</script>
