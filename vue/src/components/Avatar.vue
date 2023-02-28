<template>
  <div class="web3-avatar"></div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import { getGradientColors } from "web3-avatar";

const props = defineProps({
  address: {
    type: String,
    required: true,
  },
});

const colors = computed(() => {
  return getGradientColors(props.address);
});
</script>

<style lang="css" scoped>
.web3-avatar {
  --color-av-1: v-bind("colors[0]");
  --color-av-2: v-bind("colors[1]");
  --color-av-3: v-bind("colors[2]");
  --color-av-4: v-bind("colors[3]");
  --color-av-5: v-bind("colors[4]");
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  background-color: var(--color-av-1);
  background-image: radial-gradient(at 66% 77%, var(--color-av-2) 0px, transparent 50%),
    radial-gradient(at 29% 97%, var(--color-av-3) 0px, transparent 50%),
    radial-gradient(at 99% 86%, var(--color-av-4) 0px, transparent 50%),
    radial-gradient(at 29% 88%, var(--color-av-5) 0px, transparent 50%);
}
</style>
