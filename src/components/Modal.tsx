import React from 'react'

// CSS
import styles from './Modal.module.css';


interface Props {
  children: React.ReactNode;
}

const Modal = ({children}: Props) => {
  
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.getElementById('modal');
    modal!.classList.add("hide");    
    console.log(modal);
  };
  
  return (
    <div id='modal' className='hide'>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal;