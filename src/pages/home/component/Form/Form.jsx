import React from 'react'
import styles from './form.module.css'

const Formes = () => {
  return (
    <div className={styles.container}>
        <h1>Get Free Quote</h1>
        <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
        <form>
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Email' />
            <select> Family Law
            <option>
                    Family Law
                </option>
                <option>
                    Family Law 1
                </option>
                <option>
                    Family Law 2
                </option>
                <option>
                    Family Law 3
                </option>
            </select>
            <textarea cols="30" rows="10">Message</textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default Formes