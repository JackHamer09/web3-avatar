![web3 avatar preview image](https://user-images.githubusercontent.com/47187316/221898436-ace45b7c-f303-4b3b-b1ae-a24a1958d489.png)

# Web3 Avatar - vanilla JavaScript
Web3 Avatar is a lightweight JavaScript library for generating beautiful gradient avatars from Ethereum addresses. This is vanilla JavaScript version of the library. If you are looking for other versions like [Vue](https://github.com/JackHamer09/web3-avatar/blob/master/vue) or [React](https://github.com/JackHamer09/web3-avatar/blob/master/react), please check the [main repository](https://github.com/JackHamer09/web3-avatar).
Inspired by [Web3 Modal](https://github.com/WalletConnect/web3modal) avatar.

---

## 🖥️ Live Demo
See live demo on [web3-avatar.netlify.app](https://web3-avatar.netlify.app)

---

## 📦 Installation
You can install the library using npm:
```bash
npm install web3-avatar # or yarn add web3-avatar
```

---

## Usage
The library exports a single function that takes two arguments: the `element` to render the avatar in and the Ethereum `address` to generate the avatar from. The element can be either a DOM element or a CSS selector. After the function is called, the element inline styles will be updated to render the avatar.

```js
import createWeb3Avatar from 'web3-avatar';

createWeb3Avatar(element, address);
```

### Example
```html
<div id="#avatar"></div>
```

```js
import Web3Avatar from 'web3-avatar';

createWeb3Avatar('#avatar', '0x11Ed0AC7D6142481E459B6e5d4bfB5646277796f');
// or
const someElement = document.querySelector('#avatar');
createWeb3Avatar(someElement, '0x11Ed0AC7D6142481E459B6e5d4bfB5646277796f');
```

---

## 📖 API

### `createWeb3Avatar(element, address)`
Creates a Web3 Avatar in the given element.

#### Arguments
- `element` - DOM element or CSS selector
- `address` - Ethereum address

#### Returns
- `undefined`

<br>

### `getGradientColors(address)`
Returns the gradient colors for the given Ethereum address.

#### Arguments
- `address` - Ethereum address

#### Returns
- `colors` - Array of colors for gradient in rgb format

---

## Test

```bash
npm run test # or yarn test
```

---

## License
Released under the [MIT License](https://github.com/JackHamer09/web3-avatar/blob/master/LICENSE).