import { Binding, Expr, OnEvent } from '.';

export interface SignalRef {
  signal: string;
}
export interface BaseSignal {
  name: string;
  description?: string;
  on?: OnEvent[];
}
export interface PushSignal extends BaseSignal {
  push?: 'outer';
}
export interface NewSignal extends BaseSignal {
  value?: SignalValue;
  react?: boolean;
  update?: Expr;
  bind?: Binding;
}
export type Signal = NewSignal | PushSignal;
export type SignalValue = boolean | Date | number | [number, number] | string | undefined;
