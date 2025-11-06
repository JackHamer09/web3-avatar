import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Avatar } from '../Avatar'

describe('Avatar', () => {
  const testAddress = '0x1234567890123456789012345678901234567890'

  it('renders without crashing', () => {
    const { container } = render(<Avatar address={testAddress} />)
    expect(container.firstChild).toBeTruthy()
  })

  it('applies the correct class name', () => {
    const { container } = render(<Avatar address={testAddress} />)
    const avatar = container.firstChild as HTMLElement
    expect(avatar.classList.contains('web3-avatar')).toBe(true)
  })

  it('applies custom class name', () => {
    const { container } = render(
      <Avatar address={testAddress} className="custom-class" />
    )
    const avatar = container.firstChild as HTMLElement
    expect(avatar.classList.contains('web3-avatar')).toBe(true)
    expect(avatar.classList.contains('custom-class')).toBe(true)
  })

  it('applies custom styles', () => {
    const { container } = render(
      <Avatar address={testAddress} style={{ width: '100px', height: '100px' }} />
    )
    const avatar = container.firstChild as HTMLElement
    expect(avatar.style.width).toBe('100px')
    expect(avatar.style.height).toBe('100px')
  })

  it('generates gradient colors from address', () => {
    const { container } = render(<Avatar address={testAddress} />)
    const avatar = container.firstChild as HTMLElement

    // Check that CSS custom properties are set
    expect(avatar.style.getPropertyValue('--color-av-1')).toBeTruthy()
    expect(avatar.style.getPropertyValue('--color-av-2')).toBeTruthy()
    expect(avatar.style.getPropertyValue('--color-av-3')).toBeTruthy()
    expect(avatar.style.getPropertyValue('--color-av-4')).toBeTruthy()
    expect(avatar.style.getPropertyValue('--color-av-5')).toBeTruthy()
  })

  it('updates colors when address changes', () => {
    const { container, rerender } = render(<Avatar address={testAddress} />)
    const avatar = container.firstChild as HTMLElement
    const firstColor = avatar.style.getPropertyValue('--color-av-1')

    const newAddress = '0x9876543210987654321098765432109876543210'
    rerender(<Avatar address={newAddress} />)

    const newColor = avatar.style.getPropertyValue('--color-av-1')
    expect(newColor).not.toBe(firstColor)
  })

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Avatar address={testAddress} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('passes through additional HTML attributes', () => {
    const { container } = render(
      <Avatar
        address={testAddress}
        data-testid="custom-avatar"
        aria-label="User avatar"
      />
    )
    const avatar = container.firstChild as HTMLElement
    expect(avatar.getAttribute('data-testid')).toBe('custom-avatar')
    expect(avatar.getAttribute('aria-label')).toBe('User avatar')
  })
})
