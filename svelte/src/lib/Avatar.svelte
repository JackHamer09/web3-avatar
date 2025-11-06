<script lang="ts">
  import { getGradientColors } from 'web3-avatar'
  import './Avatar.css'

  interface $$Props extends Partial<HTMLDivElement> {
    /**
     * The Web3 address to generate the avatar from
     */
    address: string
    /**
     * Additional CSS class name
     */
    class?: string
    /**
     * Additional inline styles
     */
    style?: string
  }

  export let address: string
  export let style: string = ''
  let className: string = ''
  export { className as class }

  $: colors = getGradientColors(address)
  $: cssVars = [
    `--color-av-1: ${colors[0]}`,
    `--color-av-2: ${colors[1]}`,
    `--color-av-3: ${colors[2]}`,
    `--color-av-4: ${colors[3]}`,
    `--color-av-5: ${colors[4]}`
  ].join('; ')

  $: combinedStyle = [cssVars, style].filter(Boolean).join('; ')
</script>

<!--
  @component
  Web3Avatar component generates a beautiful gradient avatar from an Ethereum address

  @example
  ```svelte
  <script>
    import { Avatar } from 'web3-avatar-svelte'
  </script>

  <Avatar
    address="0x1234567890123456789012345678901234567890"
    style="width: 100px; height: 100px"
  />
  ```
-->
<div
  class="web3-avatar {className}"
  style={combinedStyle}
  {...$$restProps}
></div>
