import React from 'react';

const Buttons = ({ onAddNum, disabled, onClear, onEnter }) => {
  return (
    <div className='buttons'>
      <div className='row'>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(1);
          }}
        >
          1
        </button>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(2);
          }}
        >
          2
        </button>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(3);
          }}
        >
          3
        </button>
      </div>
      <div className='row'>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(3);
          }}
        >
          3
        </button>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(4);
          }}
        >
          4
        </button>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(5);
          }}
        >
          5
        </button>
      </div>
      <div className='row'>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(7);
          }}
        >
          7
        </button>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(8);
          }}
        >
          8
        </button>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(9);
          }}
        >
          9
        </button>
      </div>
      <div className='row'>
        <button className='btn' disabled={disabled} onClick={onClear}>
          Clear
        </button>
        <button
          disabled={disabled}
          className='btn'
          onClick={() => {
            onAddNum(0);
          }}
        >
          0
        </button>
        <button className='btn' disabled={disabled} onClick={onEnter}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Buttons;
