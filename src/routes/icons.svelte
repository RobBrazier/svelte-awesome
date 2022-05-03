<svelte:head>
  {@html atomOneLight}
  <title>Svelte Awesome Icons</title>
</svelte:head>

<main>
  <h1>Available Icons</h1>

  <table>
    <thead>
      <tr>
        <th>Icon</th>
        <th>Import Name</th>
        <th>Icon Name</th>
        <th>Example Snippet</th>
      </tr>
    </thead>
  {#each data as icon}
    <tr>
      <td><Icon data={icons[icon.fileName]} scale="5"/></td>
      <td>{icon.fileName}</td>
      <td>{icon.iconName}</td>
      <td><HighlightSvelte code="{getIconSnippet(icon.fileName)}"/></td>
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
  import * as icons from '../lib/icons';
  import data from '../lib/icons/icons.json';
  import Icon from '../lib/components/Icon.svelte';

  import '../global.css';
  import {HighlightSvelte} from "svelte-highlight";
  import atomOneLight from "svelte-highlight/styles/atom-one-light";

  const getIconSnippet = (fileName) => {
    return `<Icon data={${fileName}}/>`;
  }
</script>
