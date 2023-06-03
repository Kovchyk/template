import { renderHook, act } from '@testing-library/react-hooks';
import useMedia from '../useMedia';

describe('useMedia custom hook test', () => {
  const mockedValue = {
    isExtraSmallMobile: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isWidescreen: true,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('render value to match widescreen', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
    }));

    const { result } = renderHook(() => useMedia());

    expect(result.current).toEqual(mockedValue);
  });

  test('hire resize on events', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
    }));

    const events = {};

    jest.spyOn(window, 'addEventListener').mockImplementation((event, handle) => {
      events[event] = handle;
    });

    jest.spyOn(window, 'removeEventListener').mockImplementation(event => {
      events[event] = undefined;
    });

    const { unmount } = renderHook(() => useMedia());

    act(() => events['resize']());

    expect(window.addEventListener).toBeCalledWith('resize', expect.any(Function));
    unmount();
    expect(window.removeEventListener).toBeCalledWith('resize', expect.any(Function));
  });
});
