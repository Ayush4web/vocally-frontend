import React, { useEffect, useRef, useState } from "react";
import axios from "axios"
import Socials from "../Socials/Socials";
import Down from "../../assets/down.png";
import "./Hero.css";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (formErrors.status && formErrors.status !== "Failed!") {
      setIsSubmit(true);
    }
  }, [formErrors]);

  useEffect(() => {
    if (formErrors.status && formErrors.status !== "Failed!" && isSubmit) {
      setName("");
      setEmail("");
    }
  }, [isSubmit]);

  const executeScroll = () => scrollRef.current.scrollIntoView();


  const validate = (username, mail) => {
    const errors = { status: "Success!" };
    const regex = /^[^\s@]+@[^|s@]+\.[^|s@]{2,}$/i;

    if (!username) {
      errors.name = "Name is required!";
      errors.status = "Failed!";
    }
    if (!mail) {
      errors.email = "Email is required!";
      errors.status = "Failed!";
    } else if (!regex.test(mail)) {
      errors.email = "Invalid email!";
      errors.status = "Failed!";
    }

    return errors;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setFormErrors(validate(name, email));
    console.log("submit")

    try {
      await axios.post('https://form-data.up.railway.app/api/v1', { name, email })
      setIsSubmit(true)
    } catch (error) {
      setIsSubmit(false)
      setFormErrors({submit:'Something Went wrong'})
       
    }
  };

  return (
    <div className='hero-section'>
      <div className='content'>
        <h1 className='headline'>
          Vehicle Maintenance From the Comfort of Your Home
        </h1>
        <p>
          Open Auto Soothes the hassle of maintaining your vehicle and helps you
          deal with unexpected repairs worry-free.
        </p>
        <form onSubmit={(e) => submitForm(e)} className='form'>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='name-input'
            placeholder='Enter Your Name'
            type='text'
          />
          {formErrors.name && <p className='error'>{formErrors.name}</p>}
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='email-input'
            placeholder='Enter Your Email'
            type='text'
          />
          {formErrors.email && <p className='error'>{formErrors.email}</p>}
          {formErrors.submit && <p className='error'>{formErrors.submit}</p>}
          <br />
          {isSubmit ? (
            <div className='done'>Done!</div>
          ) : (
            <input className='submit-btn' type='submit' value='Submit' />
          )}
        </form>
      </div>
      <div className='illustration'>
        <div className='illustration-image'></div>
      </div>

      <img
        onClick={executeScroll}
        className='go-down'
        src={Down}
        alt='go-down'
      />
      <div className='socials'>
        <Socials />
      </div>

      <hr className='divider' ref={scrollRef} />
    </div>
  )
};

export default Hero;
