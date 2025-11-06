# Web3 Avatar - Svelte

A Svelte component for generating beautiful gradient avatars from Ethereum addresses.

## Installation

```bash
npm install web3-avatar-svelte
```

## Usage

```svelte
<script>
  import { Avatar } from 'web3-avatar-svelte'
</script>

<Avatar
  address="0x1234567890123456789012345678901234567890"
  style="width: 100px; height: 100px"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `address` | `string` | Yes | The Ethereum address to generate the avatar from |
| `class` | `string` | No | Additional CSS class names |
| `style` | `string` | No | Additional inline styles |

The component also accepts all standard HTML div attributes via `$$restProps`.

## Examples

### Basic Usage

```svelte
<Avatar address="0x1234567890123456789012345678901234567890" />
```

### With Custom Size

```svelte
<Avatar
  address="0x1234567890123456789012345678901234567890"
  style="width: 150px; height: 150px"
/>
```

### With Custom Classes

```svelte
<Avatar
  address="0x1234567890123456789012345678901234567890"
  class="my-avatar-class"
/>
```

### With Additional Attributes

```svelte
<Avatar
  address="0x1234567890123456789012345678901234567890"
  aria-label="User avatar"
  data-testid="user-avatar"
/>
```

## Styling

The component uses CSS custom properties (CSS variables) for the gradient colors, which are automatically generated from the provided address. The gradient creates a unique, beautiful avatar for each address.

## TypeScript

This package includes TypeScript definitions out of the box.

## License

MIT
