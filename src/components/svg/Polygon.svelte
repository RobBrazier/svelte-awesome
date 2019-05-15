<polygon key="polygon-{id}" bind:this={polygon} />

<script>
  import { afterUpdate } from 'svelte';

  let polygon;

  export let id = '';
  export let data = {};

  afterUpdate(() => {
    if (typeof polygon !== 'undefined') {
      Object.keys(data).forEach((key) => {
        polygon.setAttribute(key, data[key]);
      });
    }
  });
</script>
