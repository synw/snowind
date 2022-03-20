import { Component } from "vue";

type SubviewDefinition = Component | { component: Component, props: Record<string, any> }

interface SubviewParams<T extends string> {
  views: Record<T, SubviewDefinition>;
  activeView?: T;
  invisibleViews?: Array<T>,
  onViewChange?: (v: T) => void,
}

export type { SubviewParams, SubviewDefinition }