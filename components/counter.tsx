import { useState, useEffect } from 'react';

/** example component for useState and useEffect */
const Counter = () => {
  const defaultCount = 0;

  /** example of useState */
  let [count, setCount] = useState(defaultCount);

  /** example of useEffect, Similiar to ComponentDidMount + ComponentDidUpdate */
  useEffect(() => {
    const handleResize = () => {
      // ...handle the resize event
    };
    window.addEventListener('resize', handleResize);
    return () => {
      // Similiar to componentDidUnmount
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <section>
      <p>Stateful component</p>
      <button onClick={() => { setCount(--count); }}>down</button>
      <span>&nbsp; {count} &nbsp;</span>
      <button onClick={() => { setCount(++count); }}>up</button>
    </section>
  );
};

export default Counter;
