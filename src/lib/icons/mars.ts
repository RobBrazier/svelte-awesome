import type { IconData } from '$lib/components/Icon.svelte';
const mars: Record<string, IconData> = {
  mars: {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: 'M1472 128q26 0 45 19t19 45v416q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-262l-382 383q126 156 126 359 0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5q203 0 359 126l382-382h-261q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h416zM576 1536q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
      }
    ]
  }
};
export default mars;