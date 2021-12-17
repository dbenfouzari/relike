import { useEffect, useState } from "react";

import Duration from "../duration";
import { Timeout } from "../types";

/**
 * Use this hook to delay a component unmount.
 *
 * Useful in a dialog for example, where you want to animate it before destroying it.
 *
 * @param   {boolean}  isMounted Should it be destroyed ?
 * @param   {Duration} delay     The delay before destroy.
 * @example
 * useDelayedUnmount(false, Duration.seconds(2)) // after 2 seconds, you can destroy.
 * @returns {boolean}            Should you render the children
 */
const useDelayedUnmount = (isMounted: boolean, delay: Duration) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: Timeout;

    if (isMounted && !shouldRender) return setShouldRender(true);
    if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, delay.inMilliseconds);
    }

    return () => clearTimeout(timeoutId);
  }, [delay.inMilliseconds, isMounted, shouldRender]);

  return shouldRender;
};

export default useDelayedUnmount;
