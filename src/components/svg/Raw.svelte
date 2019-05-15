<g>
{@html raw}
</g>

<script>
  /* eslint-disable no-unused-vars, import/prefer-default-export */
  import { afterUpdate } from 'svelte';

  let cursor = 0xd4937;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }

  let raw;

  export let data;

  function getRaw() {
    if (!data || !data.raw) {
      return null;
    }
    let rawData = data.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });

    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }

  afterUpdate(() => {
    raw = getRaw();
  });
</script>
