<g>
  {@html raw}
</g>

<script lang="ts">
  import type { IconData } from '$lib/components/Icon.svelte';

  let cursor = 0xd4937;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }

  let raw = '';

  export let data: IconData;

  function getRaw(data: IconData) {
    if (!data || !data.raw) {
      return '';
    }
    let rawData = data.raw;
    const ids: Record<string, string> = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });

    rawData = rawData.replace(
      /#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,
      (match, rawId, _, pointerId) => {
        const id = rawId || pointerId;
        if (!id || !ids[id]) {
          return match;
        }
        return `#${ids[id]}`;
      }
    );
    return rawData;
  }

  $: raw = getRaw(data);
</script>
