import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';
import { useFormik } from 'formik';
import { Dropdown } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser'));
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('register');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleShowModal = (mode) => {
    setModalMode(mode);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowSuccessMessage(false);
    setShowModal(false);
  };

  const submitRegisterForm = async (values) => {
    try {
      const response = await fetch('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setShowSuccessMessage(true);


        setTimeout(() => {
          setShowSuccessMessage(false);
          handleCloseModal();
        }, 2000);
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const submitLoginForm = async (values) => {
    try {
      const response = await fetch('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Received data from API:', data);
  

        const user = data.find((user) => user.username === values.username && user.password === values.password);
  
        if (user) {

          localStorage.setItem('loggedInUser', values.username);
  
          setShowSuccessMessage(true);
  

          setTimeout(() => {
            setShowSuccessMessage(false);
            handleCloseModal();
            window.location.reload();
          }, 2000);
        } else {
          console.error('Invalid username or password');
        }
      } else {
        console.error('Failed to fetch user data. HTTP status:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const getSubmitFunction = () => {
    return modalMode === 'register' ? submitRegisterForm : submitLoginForm;
  };
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: getSubmitFunction(),
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
  });

  return (
    <>
      <Navbar expand="lg" className={styles.container}>
        <div className={styles.headerr}>
          <Navbar.Collapse style={{ justifyContent: 'space-between' }} className={expanded ? styles.visible : styles.hidden}>
            <Navbar.Brand>
              <img src={process.env.PUBLIC_URL + '/images/Logo (4).png'} alt="Açıklama" />
            </Navbar.Brand>
            <Nav style={{gap:'14px'}} className="mr-auto ml-3">
  <Nav.Link href="#">Home</Nav.Link>
  <Nav.Link href="#">Features</Nav.Link>
  <Nav.Link href="#">Community</Nav.Link>
  <Nav.Link href="#">Blog</Nav.Link>
  <Nav.Link href="#">Pricing</Nav.Link>
  <div className={styles.make}>
    {!loggedInUser && (
      <>
        <Button variant="primary" onClick={() => handleShowModal('register')}>
          Register
        </Button>
        <Button variant="primary" onClick={() => handleShowModal('login')}>
          Login
        </Button>
      </>
    )}
   {loggedInUser && (
  <div className={styles.make}>
    <span style={{ fontWeight: '600', marginLeft: '10px' }}>Welcome, {loggedInUser}!</span>
    <Dropdown>
      <Dropdown.Toggle  style={{width:'66px', backgroundColor:'transparent', color:'black', border:'1px solid green'}} variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu id={styles.dropmenu} style={{width:'99px', left:'-141%'}}>
        <Dropdown.Item style={{width:'99px'}} onClick={handleLogout}>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
)}
  </div>
</Nav>
          </Navbar.Collapse>
          <Navbar.Toggle onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
        </div>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === 'register' ? 'Register' : 'Login'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="error">{formik.errors.username}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </Form.Group>

 

            <Button variant="primary" type="submit">
              {modalMode === 'register' ? 'Register' : 'Login'}
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className={styles.successMessage}>
          {modalMode === 'register' ? 'User registered successfully' : 'Login successful'}
        </div>
      )}
    </>
  );
};

export default Header;
