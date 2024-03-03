import React from 'react'
import styles from './readMoreBtn.module.css'

const ReadMoreBtn = ({text, bgcolor, color, onclick}) => {
  return (
    <button onClick={onclick} style={{backgroundColor: bgcolor, color:color}} className={styles.container}>
        {text}
    </button>
  )
}

export default ReadMoreBtn