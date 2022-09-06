import React from 'react';

const Display = ({ inputPin, message }) => {
  let hidden = '';

  if (inputPin.length === 1) {
    hidden = '*';
  } else if (inputPin.length === 2) hidden = '**';
  else if (inputPin.length === 3) hidden = '***';
  else if (inputPin.length === 4) hidden = '****';
  else if (inputPin.length === 0) hidden = '';
  return (
    <div>
      {hidden}
      {message}
    </div>
  );
};

export default Display;
