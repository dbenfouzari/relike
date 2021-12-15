import { useEffect, useState } from "react";

const useMergedState = <T>(value: T) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return [internalValue, setInternalValue] as const;
};

export default useMergedState;
