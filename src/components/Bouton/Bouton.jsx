import React from 'react';
import styles from './style.module.css';

const Bouton = ({ count, setCount }) => {
;
  return (
    <div>
    <button onClick={() => setCount(count + 1)}>+
    </button>
    <button onClick={() => {
      if (count > 0){
        setCount(count - 1);
      }
    }}>-
    </button>
    <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Bouton;
