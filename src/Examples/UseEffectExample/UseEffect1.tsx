import React from 'react';

const UseEffectComponent = (props: { tick: number }) => {
  React.useEffect(
    // componentDidMount || componentDidUpdate
    () => {
      console.log(props.tick);
    },
  );

  return <div>{props.tick}</div>;
}


const Wrapper = () => {
  const [tick, setTick] = React.useState(0);
  const handleClick = () => {
    setTick((tick) => tick + 1);
  };
  
  return (
    <div>
      <UseEffectComponent tick={tick} />
      <button onClick={handleClick}>Tick</button>
    </div>
  );
};

export default Wrapper;
