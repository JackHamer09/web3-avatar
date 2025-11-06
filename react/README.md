![web3 avatar preview image](https://user-images.githubusercontent.com/47187316/221898436-ace45b7c-f303-4b3b-b1ae-a24a1958d489.png)

# Web3 Avatar - React Component

Web3 Avatar is a lightweight React component library for generating beautiful gradient avatars from Ethereum addresses. This is the React version of the library. If you are looking for other versions like [Vue](https://github.com/JackHamer09/web3-avatar/blob/master/vue) or [vanilla JavaScript](https://github.com/JackHamer09/web3-avatar/blob/master/js), please check the [main repository](https://github.com/JackHamer09/web3-avatar).

Inspired by [Web3 Modal avatar](https://github.com/WalletConnect/web3modal)

---

## 🖥️ Live Demo

See live demo on [web3-avatar.netlify.app](https://web3-avatar.netlify.app)

---

## ✨ Features

- 🎨 Beautiful gradient avatars generated from Ethereum addresses
- ⚡ Lightweight and performant
- 🔧 TypeScript support with full type definitions
- 📦 Tree-shakeable ESM and CJS builds
- ♿ Accessible and customizable
- 🎯 Forward ref support
- 🪝 React hooks friendly (useMemo for performance)

---

## 📦 Installation

```bash
npm install web3-avatar-react
```

or

```bash
yarn add web3-avatar-react
```

or

```bash
pnpm add web3-avatar-react
```

---

## 🚀 Quick Start

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

> **Note:** Styles are automatically injected when you use the component - no need to import a separate CSS file!

---

## 📖 API Reference

### Props

The `Avatar` component accepts all standard HTML div attributes plus:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `address` | `string` | Yes | The Web3/Ethereum address to generate the avatar from |
| `className` | `string` | No | Additional CSS class name |
| `style` | `CSSProperties` | No | Additional inline styles |
| `ref` | `React.Ref<HTMLDivElement>` | No | Forward ref to the underlying div element |

All other HTML div attributes (`onClick`, `onMouseEnter`, `data-*`, `aria-*`, etc.) are also supported.

---

## 💡 Usage Examples

### Basic Usage

```tsx
import { Avatar } from 'web3-avatar-react'

function UserProfile() {
  const walletAddress = '0x1234567890123456789012345678901234567890'

  return (
    <Avatar
      address={walletAddress}
      style={{ width: '64px', height: '64px' }}
    />
  )
}
```

### With Custom Styling

```tsx
import { Avatar } from 'web3-avatar-react'

function CustomAvatar() {
  return (
    <Avatar
      address="0x1234567890123456789012345678901234567890"
      className="my-custom-avatar"
      style={{
        width: '120px',
        height: '120px',
        border: '2px solid white',
      }}
    />
  )
}
```

### With Ref

```tsx
import { useRef } from 'react'
import { Avatar } from 'web3-avatar-react'

function AvatarWithRef() {
  const avatarRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (avatarRef.current) {
      console.log('Avatar dimensions:', avatarRef.current.getBoundingClientRect())
    }
  }

  return (
    <Avatar
      ref={avatarRef}
      address="0x1234567890123456789012345678901234567890"
      onClick={handleClick}
      style={{ width: '80px', height: '80px', cursor: 'pointer' }}
    />
  )
}
```

### With Event Handlers

```tsx
import { Avatar } from 'web3-avatar-react'

function InteractiveAvatar() {
  return (
    <Avatar
      address="0x1234567890123456789012345678901234567890"
      onClick={() => console.log('Avatar clicked!')}
      onMouseEnter={() => console.log('Mouse entered')}
      onMouseLeave={() => console.log('Mouse left')}
      style={{ width: '80px', height: '80px', cursor: 'pointer' }}
      aria-label="User wallet avatar"
      role="button"
      tabIndex={0}
    />
  )
}
```

### Dynamic Address

```tsx
import { useState } from 'react'
import { Avatar } from 'web3-avatar-react'

function DynamicAvatar() {
  const [address, setAddress] = useState('0x1234567890123456789012345678901234567890')

  return (
    <div>
      <Avatar
        address={address}
        style={{ width: '100px', height: '100px' }}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter wallet address"
      />
    </div>
  )
}
```

### In a List

```tsx
import { Avatar } from 'web3-avatar-react'

function UserList() {
  const users = [
    { id: 1, name: 'Alice', address: '0x1234567890123456789012345678901234567890' },
    { id: 2, name: 'Bob', address: '0x9876543210987654321098765432109876543210' },
    { id: 3, name: 'Charlie', address: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd' },
  ]

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Avatar
            address={user.address}
            style={{ width: '48px', height: '48px' }}
            aria-label={`${user.name}'s avatar`}
          />
          <span>{user.name}</span>
        </li>
      ))}
    </ul>
  )
}
```

---

## 🎨 Styling

The component comes with default styles that are automatically injected when you use the component. No need to import a separate CSS file!

You can customize the avatar by:

1. **Using the `style` prop** for inline styles
2. **Using the `className` prop** to apply custom CSS classes
3. **Overriding CSS variables** in your global styles

The component uses CSS custom properties internally that you can override if needed:

```css
.web3-avatar {
  --color-av-1: /* generated color 1 */;
  --color-av-2: /* generated color 2 */;
  --color-av-3: /* generated color 3 */;
  --color-av-4: /* generated color 4 */;
  --color-av-5: /* generated color 5 */;
}
```

---

## 📦 TypeScript

The package includes full TypeScript definitions. The main types exported are:

```tsx
import type { AvatarProps } from 'web3-avatar-react'

// AvatarProps extends React.HTMLAttributes<HTMLDivElement>
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  address: string
  className?: string
  style?: CSSProperties
}
```

---

## 🧪 Testing

The component is fully tested with Vitest and React Testing Library.

To run tests:

```bash
npm test
```

---

## 🏗️ Build

To build the package:

```bash
npm run build
```

This will generate:
- ESM build in `dist/index.js` (with styles injected)
- CJS build in `dist/index.cjs` (with styles injected)
- Type definitions in `dist/index.d.ts`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

Released under the [MIT License](LICENSE).

---

## 🔗 Related Packages

- [web3-avatar](https://github.com/JackHamer09/web3-avatar/tree/master/js) - Vanilla JavaScript version
- [web3-avatar-vue](https://github.com/JackHamer09/web3-avatar/tree/master/vue) - Vue 3 version

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!
