import isDeepEqualReact from "fast-deep-equal/react";
import { DependencyList, EffectCallback, useEffect, useRef } from "react";

const isPrimitive = (val: any) => val !== Object(val);

type DepsEqualFnType<TDeps extends DependencyList> = (prevDeps: TDeps, nextDeps: TDeps) => boolean;

const useDeepCompareEffect = <TDeps extends DependencyList>(
  effect: EffectCallback,
  deps: TDeps,
  depsEqual: DepsEqualFnType<TDeps> = isDeepEqualReact,
) => {
  if (process.env.NODE_ENV !== "production") {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn("`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.");
    }

    if (deps.every(isPrimitive)) {
      console.warn(
        "`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.",
      );
    }

    if (typeof depsEqual !== "function") {
      console.warn("`useDeepCompareEffect` should be used with depsEqual callback for comparing deps list");
    }
  }

  const ref = useRef<TDeps | undefined>(undefined);

  if (!ref.current || !depsEqual(deps, ref.current)) {
    ref.current = deps;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, ref.current);
};

export default useDeepCompareEffect;
