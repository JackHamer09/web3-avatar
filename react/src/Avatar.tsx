import React, { useMemo, CSSProperties } from 'react'
import { getGradientColors } from 'web3-avatar'
import './Avatar.css'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The Web3 address to generate the avatar from
   */
  address: string
  /**
   * Additional CSS class name
   */
  className?: string
  /**
   * Additional inline styles
   */
  style?: CSSProperties
}

/**
 * Web3Avatar component generates a beautiful gradient avatar from an Ethereum address
 *
 * @example
 * ```tsx
 * import { Avatar } from 'web3-avatar-react'
 * import 'web3-avatar-react/style.css'
 *
 * function App() {
 *   return (
 *     <Avatar
 *       address="0x1234567890123456789012345678901234567890"
 *       style={{ width: '100px', height: '100px' }}
 *     />
 *   )
 * }
 * ```
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ address, className = '', style, ...rest }, ref) => {
    const colors = useMemo(() => getGradientColors(address), [address])

    const avatarStyle: CSSProperties = {
      ...style,
      // @ts-ignore - CSS custom properties
      '--color-av-1': colors[0],
      '--color-av-2': colors[1],
      '--color-av-3': colors[2],
      '--color-av-4': colors[3],
      '--color-av-5': colors[4],
    }

    return (
      <div
        ref={ref}
        className={`web3-avatar ${className}`.trim()}
        style={avatarStyle}
        {...rest}
      />
    )
  }
)

Avatar.displayName = 'Avatar'
