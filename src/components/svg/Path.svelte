<path key="path-{id}" bind:this={path} />

<script>
  import { afterUpdate } from 'svelte';

  let path;

  export let id = '';
  export let data = {};

  afterUpdate(() => {
    if (typeof path !== 'undefined') {
      Object.keys(data).forEach((key) => {
        path.setAttribute(key, data[key]);
      });
    }
  });
</script>
