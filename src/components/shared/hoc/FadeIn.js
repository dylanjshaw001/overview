import React, { useState, useRef, useEffect } from 'react';

export const FadeIn = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`
        fade-in-custom 
        ${isVisible ? 'is-visible' : ''}
        ${props.swipe ? 'swipe' : ''}
      `}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
