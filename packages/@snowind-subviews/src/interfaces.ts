import { Component } from "vue";

interface SubviewParams<T extends string> {
  views: Record<T, Component>;
  activeView?: T;
  invisibleViews?: Array<T>,
  onViewChange?: (v: T) => void,
}

export type { SubviewParams }