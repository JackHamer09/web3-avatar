<template>
  <div class="relative mt-1 rounded-md shadow-sm">
    <input
      v-model="inputted"
      type="text"
      name="address"
      maxlength="42"
      class="block w-full rounded-md border-gray-300 text-center text-xs leading-relaxed text-gray-800 transition-colors placeholder:font-medium focus:border-indigo-600 focus:outline-none focus:ring-indigo-600"
      :class="{ error: invalid }"
      placeholder="Enter ethereum address"
    />
    <Transition
      enter-active-class="transform ease-out duration-200 transition"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="invalid" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ExclamationCircleIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  modelValue: {
    type: String,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (eventName: "update:modelValue", value?: string): void;
}>();

const inputted = computed({
  get: () => props.modelValue,
  set: (value?: string) => {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
.error {
  @apply border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500;
}
</style>
