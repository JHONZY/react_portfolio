import React, { useEffect } from 'react'
import code from '../picture/code.gif'
import '../pages/About.css';
import { Button } from '../Button';

import Aos from 'aos'
import 'aos/dist/aos.css'


function About() {
    useEffect(()=> {
      Aos.init({ duration: 2000});
    }, []);
  
return (
  <>
  <div className="About" id='about'>
    <h1 data-aos='zoom-in'>about</h1>
      <div className='About-content'>
        <div className="left" data-aos="zoom-in">
          <h2>John Lester M. Borromeo</h2>
            <h4>Front-End Developer</h4>
              <p>I am a recent graduate of Colegio De Montalban - Montalban Rizal.
                  Front-end developer for the web I am eager to learn new things.
                  Front-end development because I don't want to limit my knowledge.
          <br/>
          <br/>
                  I am currently looking for an entry-level position at a company where I can advance my career.
                  can put my ideas and front-end development talents to use I'm willing to be
                  learned to expand my knowledge and skill base so that I can
                  contribute significantly to the growth of the organization and myself as an individual
              </p>
              <a href='John Lester Borromeo(RESUME).pdf' download='John Lester Borromeo(RESUME).pdf' target="_blank" ><Button  buttonStyle='button' buttonSize='animate--mobile' buttonColor='blue'>DOWNLOAD CV<i className='fa fa-download'/></Button></a>
        </div>

      <div className="right" data-aos="zoom-out">
        <div className="img-container" >
          <img src={code} className='img' alt='new' />
        </div>
      </div>
  </div>
</div>

  </>
)
}

export default About;
