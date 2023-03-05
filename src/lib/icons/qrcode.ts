import type { IconData } from '$lib/components/Icon.svelte';
const qrcode: Record<string, IconData> = {
  qrcode: {
    width: 1408,
    height: 1792,
    paths: [
      {
        d: 'M384 1152v128h-128v-128h128zM384 384v128h-128v-128h128zM1152 384v128h-128v-128h128zM128 1407h384v-383h-384v383zM128 640h384v-384h-384v384zM896 640h384v-384h-384v384zM640 896v640h-640v-640h640zM1152 1408v128h-128v-128h128zM1408 1408v128h-128v-128h128zM1408 896v384h-384v-128h-128v384h-128v-640h384v128h128v-128h128zM640 128v640h-640v-640h640zM1408 128v640h-640v-640h640z'
      }
    ]
  }
};
export default qrcode;