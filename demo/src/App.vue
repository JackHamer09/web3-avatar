<template>
  <div class="isolate bg-white px-5">
    <!-- Top shape -->
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg
        class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
      >
        <path
          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
          fill-opacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <!-- Main content -->
    <main class="flex h-full min-h-screen items-center justify-center overflow-hidden py-20">
      <div class="h-max w-max">
        <Web3Avatar :address="lastValidAddress" class="mx-auto mb-5 h-24 w-24" />
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">web3-avatar</h1>
          <p class="mx-auto mt-4 max-w-[555px] text-lg leading-8 text-gray-600">
            Generate beautiful unique gradient avatars for your ethereum web3 projects with tools you like:
            <a class="link" href="https://github.com/JackHamer09/web3-avatar/tree/main/vue#readme" target="_blank"
              >Vue</a
            >,
            <a class="link" href="https://github.com/JackHamer09/web3-avatar/tree/main/react#readme" target="_blank"
              >React</a
            >
            or
            <a class="link" href="https://github.com/JackHamer09/web3-avatar/tree/main/js#readme" target="_blank">
              vanilla JavaScript</a
            >.
          </p>
          <AddressInput v-model="address" :invalid="!!address && !isAddressValid" class="mx-auto mt-4 max-w-[380px]" />
          <div class="mt-5 flex items-center justify-center gap-x-6">
            <a
              href="https://github.com/JackHamer09/web3-avatar#readme"
              target="_blank"
              class="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Docs <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom shape -->
      <div
        class="absolute inset-x-0 top-[calc(100%-22rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-43rem)]"
      >
        <svg
          class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";

import { ethers } from "ethers";
import Web3Avatar from "web3-avatar-vue";

import AddressInput from "@/components/AddressInput.vue";

const lastValidAddress = ref("0xa1cf087DB965Ab02Fb3CFaCe1f5c63935815f044");
const address = ref("");
const isAddressValid = computed(() => {
  try {
    return ethers.isAddress(address.value);
  } catch (error) {
    return false;
  }
});
watchEffect(() => {
  if (isAddressValid.value) {
    lastValidAddress.value = address.value;
  }
});
</script>

<style lang="scss" scoped>
.link {
  @apply font-medium text-indigo-600 underline transition-colors hover:text-indigo-800;
}
</style>
