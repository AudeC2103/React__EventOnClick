import React, { useState } from 'react';
import styles from './style.module.css';
import Bouton from '../Bouton/Bouton';

const Activite = ({ title }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counterSection}>
      <h2>{title}</h2>
      <p>Nombre de participants: {count}</p>
      <Bouton count={count} setCount={setCount}/>
    </div>
  );
};

export default Activite;
