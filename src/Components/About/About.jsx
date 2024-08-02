import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import about_img from '../../Assets/about.png';
import play_icon from '../../Assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='About'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img' />
        <img src={play_icon} alt='' className='play-icon' onClick={() => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow Leader Today</h2>
        <p>Embark on a transformative educational journey with our university comprehensive education programs. Our cutting-edge curriculum is designed to empower students with knowledge</p>
        <p>With focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make meaningful impact in classroom, schools and communities</p>
        <p>Whatever you aspire to become a teacher, administrator and counselor, or educational leader, our diverse range of programs offer the perfect pathway</p>
      </div>
    </div>
  );
}

About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default About;
