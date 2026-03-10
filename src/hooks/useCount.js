import { useState, useEffect } from "react";

export function useCount(target, enabled, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, enabled, duration]);

  return value;
}
