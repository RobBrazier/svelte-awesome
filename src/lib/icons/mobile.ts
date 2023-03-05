import type { IconData } from '$lib/components/Icon.svelte';
const mobile: Record<string, IconData> = {
  mobile: {
    width: 768,
    height: 1792,
    paths: [
      {
        d: 'M464 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zM672 1248v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zM480 400q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zM768 384v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z'
      }
    ]
  }
};
export default mobile;