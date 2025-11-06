![web3 avatar preview image](https://user-images.githubusercontent.com/47187316/221898436-ace45b7c-f303-4b3b-b1ae-a24a1958d489.png)

# Web3 Avatar

A lightweight library for generating beautiful gradient avatars from Ethereum addresses.

## Available for

- [Vue](https://github.com/JackHamer09/web3-avatar/blob/master/vue)
- [React](https://github.com/JackHamer09/web3-avatar/blob/master/react)
- [Svelte](https://github.com/JackHamer09/web3-avatar/blob/master/svelte)
- [Vanilla JavaScript](https://github.com/JackHamer09/web3-avatar/blob/master/js)

---

## 🖥️ Live Demo
See live demo on [web3-avatar.netlify.app](https://web3-avatar.netlify.app)

---

## 📚 Getting Started

### Vue

```bash
npm install web3-avatar-vue
```

```vue
<template>
  <Web3Avatar address="0x1234567890123456789012345678901234567890" />
</template>

<script setup>
import Web3Avatar from 'web3-avatar-vue'
import 'web3-avatar-vue/dist/style.css'
</script>
```

[View full Vue documentation →](https://github.com/JackHamer09/web3-avatar/blob/master/vue)

### React

```bash
npm install web3-avatar-react
```

```tsx
import { Avatar } from 'web3-avatar-react'

function App() {
  return (
    <Avatar
      address="0x1234567890123456789012345678901234567890"
      style={{ width: '100px', height: '100px' }}
    />
  )
}
```

[View full React documentation →](https://github.com/JackHamer09/web3-avatar/blob/master/react)

### Svelte

```bash
npm install web3-avatar-svelte
```

```svelte
<script>
  import { Avatar } from 'web3-avatar-svelte'
</script>

<Avatar
  address="0x1234567890123456789012345678901234567890"
  style="width: 100px; height: 100px"
/>
```

[View full Svelte documentation →](https://github.com/JackHamer09/web3-avatar/blob/master/svelte)

### Vanilla JavaScript

```bash
npm install web3-avatar
```

```html
<div id="avatar"></div>
```

```js
import createWeb3Avatar from 'web3-avatar'

createWeb3Avatar('#avatar', '0x1234567890123456789012345678901234567890')
```

[View full vanilla JavaScript documentation →](https://github.com/JackHamer09/web3-avatar/blob/master/js)

---

## License
Released under the [MIT License](https://github.com/JackHamer09/web3-avatar/blob/master/LICENSE).
