import { Duration } from "@hastics/utils";
import { useEffect, useState } from "react";

type Timeout = ReturnType<typeof setTimeout>;

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
