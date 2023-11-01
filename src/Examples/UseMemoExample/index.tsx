import React from 'react';

const UseEffectComponent = (props: { list: number[] }) => {
  const memoizedList = React.useMemo(
    () => props.list.filter((number) => number > 0),
    [props.list],
  );

  return memoizedList;
}

const Wrapper = () => {
  const [list, setList] = React.useState([1, 2, -3, 4, -5]);
  const handleClick = () => {
    setList((list) => list.map((number) => number * -1));
  }

  return (
    <div>
      <UseEffectComponent list={list} />
      <button onClick={handleClick}>Change list</button>
    </div>
  );
}

export default Wrapper;