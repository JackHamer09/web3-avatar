![web3 avatar preview image](https://user-images.githubusercontent.com/47187316/221898436-ace45b7c-f303-4b3b-b1ae-a24a1958d489.png)

# Web3 Avatar - Vue component
Web3 Avatar is a lightweight Vue library for generating beautiful gradient avatars from Ethereum addresses. This is Vue version of the library. If you are looking for other versions like [React](https://github.com/JackHamer09/web3-avatar/blob/master/react) or [vanilla JavaScript](https://github.com/JackHamer09/web3-avatar/blob/master/js), please check the [main repository](https://github.com/JackHamer09/web3-avatar).
Inspired by [Web3 Modal avatar](https://github.com/WalletConnect/web3modal)

---

## 📦 Installation
You can install the library using npm:
```bash
npm install web3-avatar-vue # or yarn add web3-avatar-vue
```

---

## 🚀 Quick start
For more detailed usage instructions see the [usage](#usage).

```html
<template>
   <Web3Avatar address="0x11Ed0AC7D6142481E459B6e5d4bfB5646277796f" />
</template>

<script setup>
import Web3Avatar from 'web3-avatar-vue';
</script>
```

---

## Usage
1. First, you need to import the `style.css` file which contains the styles for the component.
   ### Vite, Vue CLI, etc.
   ```js
   // main.js
   import 'web3-avatar-vue/dist/style.css';
   ```

   ### Nuxt
   Add the `style.css` file to the `css` array in your Nuxt config file:
   ```js
   /// nuxt.config.js
   export default defineNuxtConfig({
      ... // other config
      css: ['web3-avatar-vue/dist/style.css'],
      ... // other config
   })
   ```

   ### Browser
   ```html
   <!-- index.html -->
   <link rel="stylesheet" href="https://unpkg.com/web3-avatar-vue/dist/style.css">
   ```

2. Then, you can import the component:
   ### Composition API
   ```html
   <script setup>
   import Web3Avatar from 'web3-avatar-vue';
   </script>
   ```

   ### Options API
   ```js
   import Web3Avatar from 'web3-avatar-vue';

   new Vue({
      ...
      components: {
         Web3Avatar
      },
      ...
   })
   ```

   ### Browser
   ```html
   <!-- index.html -->
   <script src="https://unpkg.com/web3-avatar-vue"></script>
   ```

3. Finally, you can use the component in your template 🎉:
   ```html
   <Web3Avatar address="0x11Ed0AC7D6142481E459B6e5d4bfB5646277796f" />
   ```

---

## Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `address` | `String` | `null` | Ethereum address |

---

## Test
```bash
npm run test # or yarn test
```

---

## License
Released under the [MIT License](https://github.com/JackHamer09/web3-avatar/blob/master/LICENSE).