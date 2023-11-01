import React from 'react';

const UseEffectComponent = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(
    // componentDidMount
    () => {
      const interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);

      // componentWillUnmount
      return () => clearInterval(interval);
    },
    [],
  );

  return <div>{count}</div>;
}

export default UseEffectComponent;
