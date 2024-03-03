import styles from './main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.special}>
      <div className={styles.words}>
      <div className="row">
          <div className="col-12 col-sm-12 col-lg-6">
            <div className={styles.colses}>
            <h1>Lessons and insights from 8 years</h1>
      <p>Where to grow your business as a photographer: site or social media?</p>
      <button>Register</button>
                  </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6">
            <div className={styles.colses}>
            <img src={process.env.PUBLIC_URL + '/images/Illustration.png'} alt="Açıklama" />

                  </div>
            </div>
            </div>
     
     </div>
      </div>
      <div className={styles.our}>
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className={styles.images}>
        <img src={process.env.PUBLIC_URL + '/images/Logo (3).png'} alt="Açıklama" />
        <img src={process.env.PUBLIC_URL + '/images/Logo (3).png'} alt="Açıklama" />
        <img src={process.env.PUBLIC_URL + '/images/Logo (3).png'} alt="Açıklama" />
        <img src={process.env.PUBLIC_URL + '/images/Logo (3).png'} alt="Açıklama" />
        <img src={process.env.PUBLIC_URL + '/images/Logo (3).png'} alt="Açıklama" />
        <img src={process.env.PUBLIC_URL + '/images/Logo (3).png'} alt="Açıklama" />
        <img src={process.env.PUBLIC_URL + '/images/Logo (3).png'} alt="Açıklama" />
        </div>
      </div>
      <div className={styles.manage}>
        <h2>Manage your entire community in a single system</h2>
        <span>Who is Nextcent suitable for?</span>
        <div style={{width:'90%'}} className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className={styles.members}>
            <img src={process.env.PUBLIC_URL + '/images/Icon.png'} alt="Açıklama" />
            <h1>Membership Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className={styles.members}>
            <img src={process.env.PUBLIC_URL + '/images/Icon.png'} alt="Açıklama" />
            <h1>Membership Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className={styles.members}>
            <img src={process.env.PUBLIC_URL + '/images/Icon.png'} alt="Açıklama" />
            <h1>Membership Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{width:'90%'}} className="row">
        <div className="col-12 col-sm-6 col-lg-6">
        <div className={styles.unseen}>
          <img src={process.env.PUBLIC_URL + '/images/rafiki.png'} alt="Açıklama" />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-6">
          <div className={styles.unseenz}>
            <h1>The unseen of spending three years at Pixelgrade</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <div style={{width:'100%', padding:'14px', backgroundColor:'#F5F7FA'}} className={styles.local}>
      <div style={{width:'90%'}} className="row">
        <div className="col-12 col-sm-6 col-lg-6">
          <div className={styles.help}>
            <h1>Helping a local business reinvent itself</h1>
            <p>We reached here with our hard work and dedication</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-6">
          <div className={styles.help}>
            <div style={{width:'90%'}} className="row">
              <div className="col-12 col-sm-6 col-lg-6">
                <div className={styles.event}>
                <FontAwesomeIcon icon={faPerson} style={{fontSize:'33px', color:'green'}} />
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column'}} className="payments">
                  <h2>2,245,341</h2>
                  <span>Members</span>
                </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6">
                <div className={styles.event}>
                <FontAwesomeIcon icon={faPerson} style={{fontSize:'33px', color:'green'}} />
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column'}} className="payments">
                  <h2>2,245,341</h2>
                  <span>Members</span>
                </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6">
                <div className={styles.event}>
                <FontAwesomeIcon icon={faPerson} style={{fontSize:'33px', color:'green'}} />
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column'}} className="payments">
                  <h2>2,245,341</h2>
                  <span>Members</span>
                </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6">
                <div className={styles.event}>
                <FontAwesomeIcon icon={faPerson} style={{fontSize:'33px', color:'green'}} />
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column'}} className="payments">
                  <h2>2,245,341</h2>
                  <span>Members</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div style={{width:'90%'}} className="row">
        <div className="col-12 col-sm-5 col-lg-5">
          <div className={styles.pana}>
        <img src={process.env.PUBLIC_URL + '/images/pana.png'} alt="Açıklama" />
          </div>
        </div>
        <div className="col-12 col-sm-7 col-lg-7">
          <div className={styles.pana}>
        <h1>How to design your site footer like we did</h1>
        <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
        <button>Learn more</button>
          </div>
        </div>
      </div>
      <div className={styles.tesla}>
        <div style={{width:'90%'}} className="row">
          <div className="col-12 col-sm-5 col-lg-5">
            <div className={styles.elon}>
            <img style={{width:'70%', height:'80%'}} src={process.env.PUBLIC_URL + '/images/image 9.png'} alt="Açıklama" />
            </div>
          </div>
          <div className="col-12 col-sm-7 col-lg-7">
            <div className={styles.elon}>
              <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              <h2>Tim Smith</h2>
              <span>British Dragon Boat Racing Association</span>
              <div className={styles.icons}>
            <img src={process.env.PUBLIC_URL + '/images/Logo (5).png'} alt="Açıklama" />
            <img src={process.env.PUBLIC_URL + '/images/Logo (5).png'} alt="Açıklama" />
            <img src={process.env.PUBLIC_URL + '/images/Logo (5).png'} alt="Açıklama" />
            <img src={process.env.PUBLIC_URL + '/images/Logo (5).png'} alt="Açıklama" />
            <img src={process.env.PUBLIC_URL + '/images/Logo (5).png'} alt="Açıklama" />
            <img src={process.env.PUBLIC_URL + '/images/Logo (5).png'} alt="Açıklama" />
            <button>Meet all customers <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.caring}>
        <h1>Caring is the new marketing</h1>
        <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        <div style={{width:'90%'}} className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className={styles.stream}>
            <img src={process.env.PUBLIC_URL + '/images/image 18.png'} alt="Açıklama" />
              <div className={styles.word}>
              <span>Creating Streamlined Safeguarding Processes with OneRen</span>
              <button>Read more <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className={styles.stream}>
            <img src={process.env.PUBLIC_URL + '/images/image 18.png'} alt="Açıklama" />
              <div className={styles.word}>
              <span>Creating Streamlined Safeguarding Processes with OneRen</span>
              <button>Read more <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className={styles.stream}>
            <img src={process.env.PUBLIC_URL + '/images/image 18.png'} alt="Açıklama" />
              <div className={styles.word}>
              <span>Creating Streamlined Safeguarding Processes with OneRen</span>
              <button>Read more <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.suscipit}>
        <h1>Pellentesque suscipit fringilla libero eu.</h1>
        <button>Get Demo <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
   
     
    </div>
    
  )
}

export default Main