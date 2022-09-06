import React, { useState } from 'react';
import Buttons from './Buttons';
import Display from './Display';

const passPin = '1111';

const Pad = () => {
  const [inputPin, setInputPin] = useState('');
  const [message, setMessage] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const onAddNum = (num) => {
    if (inputPin.length < 4) {
      setInputPin((prev) => {
        return prev.concat(num);
      });
    } else return;
  };

  const onEnter = () => {
    if (inputPin === passPin) {
      setMessage('-SUCCESS-');
      setInputPin('');
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
        setMessage('');
        setAttemptCount(0);
      }, 1500);
    } else {
      if (inputPin !== passPin && attemptCount !== 2) {
        if (inputPin !== '') {
          setAttemptCount(attemptCount + 1);
          setDisabled(true);
          setInputPin('');
          setMessage('-WRONG PIN-');
          setTimeout(() => {
            setMessage('');
            setDisabled(false);
          }, 1000);
        }
      }
      if (inputPin.length === 4 && inputPin !== passPin && attemptCount === 2) {
        setAttemptCount(attemptCount + 1);
        setMessage('-LOCKED-');
        setInputPin('');
        setDisabled(true);
        setTimeout(() => {
          setMessage('');
          setInputPin('');
          setDisabled(false);
          setAttemptCount(0);
        }, 30000);
      }
    }
  };

  const onClear = () => {
    setMessage('');
    setDisabled(false);
    setInputPin('');
  };

  return (
    <div className='pad-container'>
      <div className='display'>
        <Display inputPin={inputPin} message={message} />
      </div>
      <Buttons
        onAddNum={onAddNum}
        disabled={disabled}
        onClear={onClear}
        onEnter={onEnter}
      />
    </div>
  );
};

export default Pad;
