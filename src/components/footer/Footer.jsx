import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div style={{width:'90%'}} className="row">
        <div className="col-12 col-sm-6 col-lg-5">
          <div className={styles.nexcent}>
      <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt="Açıklama" />
            <p>Copyright © 2020 Landify UI Kit.
            All rights reserved</p>
            <div className="icons">
      <img src={process.env.PUBLIC_URL + '/images/Social Icons.png'} alt="Açıklama" />
      <img src={process.env.PUBLIC_URL + '/images/Social Icons.png'} alt="Açıklama" />
      <img src={process.env.PUBLIC_URL + '/images/Social Icons.png'} alt="Açıklama" />
      <img src={process.env.PUBLIC_URL + '/images/Social Icons.png'} alt="Açıklama" />

            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className={styles.nexcents}>
            <div className={styles.compani}>
          <h1>Company</h1>
          <div className={styles.word}>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Testimonials</p>
          </div>
            </div>
            <div className={styles.compani}>
          <h1>Support</h1>
          <div className={styles.word}>
            <p>Help center</p>
            <p>Terms of service</p>
            <p>Legal</p>
            <p>Privacy policy</p>
            <p>Status</p>
          </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className={styles.nexcentsz}>
          <h1>Stay up to date</h1>
          <button>Your email address <img style={{width:'18px', height:'18px'}} src={process.env.PUBLIC_URL + '/images/Vector.png'} alt="Açıklama" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer