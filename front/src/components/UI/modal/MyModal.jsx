import React from 'react'
import styles from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
  if (visible) {
    return (
      <div className={styles.myModal} onClick={() => setVisible(false)}>
        <div
          className={styles.myModalContent}
          onClick={(event) => event.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  }
}

export default MyModal
