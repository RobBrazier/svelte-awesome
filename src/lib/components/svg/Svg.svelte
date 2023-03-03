<svg version="1.1" class="fa-icon {className}"
  class:fa-spin={spin} class:fa-pulse={pulse} class:fa-inverse={inverse}
  class:fa-flip-horizontal="{flip === 'horizontal'}" class:fa-flip-vertical="{flip === 'vertical'}"
  {x} {y} {width} {height}
  aria-label={label}
  role="{ label ? 'img' : 'presentation' }"
  viewBox={box} {style}
  >
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

<script lang="ts">
  let className: string = '';

  export { className as class };

  export let width: number;
  export let height: number;
  export let box: string | null = null;

  export let spin = false;
  export let inverse = false;
  export let pulse = false;
  export let flip: string | null = null;

  // optionals
  export let x: number | undefined = undefined;
  export let y: number | undefined = undefined;
  export let style: string | undefined = undefined;
  export let label: string | undefined = undefined;
</script>
