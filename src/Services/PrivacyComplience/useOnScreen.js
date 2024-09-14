import React, { useEffect, useRef, useState } from 'react';

const useOnScreen = (options) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) => {
    setIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    if (ref) {
      observer.observe(ref);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref, observer]);

  return [setRef, isIntersecting];
};

export default useOnScreen;
