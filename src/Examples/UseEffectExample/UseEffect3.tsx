import React from 'react';

const UseEffectComponent = (props: { startInterval: boolean }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(
    // componentDidMount || componentDidUpdate
    () => {
      if (props.startInterval) {
        const interval = setInterval(() => {
          setCount((count) => count + 1);
        }, 1000);

        return () => clearInterval(interval);
      }
    },
    [props.startInterval],
  );

  return <div>{count}</div>;
}

const Wrapper = () => {
  const [startInterval, setStartInterval] = React.useState(false);
  const handleClick = () => {
    setStartInterval(!startInterval);
  }

  return (
    <div>
      <UseEffectComponent startInterval={startInterval} />
      <button onClick={handleClick}>Start/Stop</button>
    </div>
  )
}

export default Wrapper;
