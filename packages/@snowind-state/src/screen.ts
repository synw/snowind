import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { TwBreakpoint } from './types';

const twbreakpoints = useBreakpoints(breakpointsTailwind);

export default function useScreenSize(mobileBreakpoint: TwBreakpoint = "sm", tabletBreakpoint: TwBreakpoint = "lg") {
  const isMobile = twbreakpoints.smaller(mobileBreakpoint);
  const isTablet = twbreakpoints.between(mobileBreakpoint, tabletBreakpoint);
  const isDesktop = twbreakpoints.greater(tabletBreakpoint);
  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}