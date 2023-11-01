import React from 'react';

const Button = (props: { onClick: () => void }) => (
  <button onClick={props.onClick}>Click me</button>
);

const UseCallbackComponent = (props: { tick: number }) => {
  const handleClick = React.useCallback(
    () => {
      console.log('Click happened', props.tick);
    },
    [props.tick]
  );

  return <Button onClick={handleClick} />;
};

const Wrapper = () => {
  const [tick, setTick] = React.useState(0);
  const handleClick = () => {
    setTick((tick) => tick + 1);
  };
  
  return (
    <div>
      <UseCallbackComponent tick={tick} />
      <button onClick={handleClick}>Tick</button>
    </div>
  );
};

export default Wrapper;
