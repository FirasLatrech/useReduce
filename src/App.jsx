import React, { useState, useReducer } from 'react';
import './App.css';

const initState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + +action.value;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  const [value,setValue] =useState(0)
  return (
    <div className="main-container">
      <h1>Counter With useReducer</h1>
      <p className="count-container">{count}</p>
      <div className="button-container">
        <button className="add" onClick={() => dispatch({ type: 'increment', value: 1 })}>
          ADD +1
        </button>
        <button className="min" onClick={() => dispatch({ type: 'decrement' })}>
          MIN -1
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>RESET</button>
      </div>
      <div className="inputsContiner">
        <input  className='text' value={value} onChange={(e) => setValue(e.target.value)} type="number"/>
        <button
            onClick={() =>
              dispatch({
                type: "increment",
                value,
              })
            }
          >
            Increment by value
          </button>
      </div>
    </div>
  );
}

export default App;
