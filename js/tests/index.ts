import { getGradientColors, createAvatar } from "../index";

describe('getGradientColors', () => {
  test('returns expected colors array', () => {
    expect(getGradientColors("0x11Ed0AC7D6142481E459B6e5d4bfB5646277796f")).toEqual([
      "rgb(233, 123, 186)",
      "rgb(234, 131, 240)",
      "rgb(235, 6, 224)",
      "rgb(109, 188, 10)",
      "rgb(97, 246, 235)"
    ]);
  });
});

describe('createAvatar', () => {
  const address = '0x11Ed0AC7D6142481E459B6e5d4bfB5646277796f';

  beforeEach(() => {
    document.body.innerHTML = '';
  });
  
  test('should throw an error if avatar element is not found', () => {
    expect(() => createAvatar('#avatar', address)).toThrowError('Avatar element not found');
  });
  test('should set avatar styles correctly', () => {
    const avatar = document.createElement('div');
    avatar.id = 'avatar';
    document.body.appendChild(avatar);
    
    const colors = getGradientColors(address);
    createAvatar('#avatar', address);
    
    expect(avatar.style.borderRadius).toBe('50%');
    expect(avatar.style.boxShadow).toBe('inset 0 0 0 1px rgba(0, 0, 0, 0.1)');
    expect(avatar.style.backgroundColor).toBe(colors[0]);
  });
  test('should accept an HTMLElement instead of a selector', () => {
    const avatar = document.createElement('div');

    const colors = getGradientColors(address);
    createAvatar(avatar, address);

    expect(avatar.style.borderRadius).toBe('50%');
    expect(avatar.style.boxShadow).toBe('inset 0 0 0 1px rgba(0, 0, 0, 0.1)');
    expect(avatar.style.backgroundColor).toBe(colors[0]);
  });
});