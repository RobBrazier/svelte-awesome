<svelte:head>
  {@html atomOneLight}
  <title>Svelte Awesome Icons</title>
</svelte:head>

<main>
  <h1>Available Font-Awesome v4 Icons</h1>
  <input
    type="text"
    name="search"
    placeholder="Search Icon"
    on:input={(e) => debounce(e.currentTarget.value)}
  />
  <table>
    <thead>
      <tr>
        <th>Icon</th>
        <th>Import Name</th>
        <th>Icon Name</th>
        <th>Example Snippet</th>
      </tr>
    </thead>
    {#each filteredIcons as icon}
      <tr>
        <td><Icon data={getIcon(icon.fileName)} scale={5} /></td>
        <td>{icon.fileName}</td>
        <td>{icon.iconName}</td>
        <td><HighlightSvelte code={getIconSnippet(icon.fileName)} /></td>
      </tr>
    {/each}
  </table>
</main>

<style>
  main table {
    margin: 0 auto;
  }
</style>

<script lang="ts">
  import * as icons from '$lib/icons';
  import data from '$lib/icons/icons.json';
  import Icon from '$lib/components/Icon.svelte';

  import type { IconType } from '$lib/components/Icon.svelte';

  import '$css/global.css';
  import { HighlightSvelte } from 'svelte-highlight';
  import atomOneLight from 'svelte-highlight/styles/atom-one-light';

  const getIconSnippet = (fileName: string) => {
    return `import ${fileName} from 'svelte-awesome/icons/${fileName}';

<Icon data={${fileName}}/>`;
  };

  function getIcon(name: string): IconType {
    return (icons as Record<string, IconType>)[name];
  }

  let searchValue = '';
  let timer: number;
  const debounce = (v: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchValue = v;
    }, 750);
  };

  $: filteredIcons = data.filter((icon) => icon.iconName.toLowerCase().startsWith(searchValue));
</script>
