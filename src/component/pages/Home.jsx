import React, { useEffect } from "react"; 
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter
  } from 'react-icons/fa';

import { BsGithub } from 'react-icons/bs'
import '../pages/home.css'

import Typical from 'react-typical';
import Aos from "aos";



function Home() {
  useEffect(()=> {
    Aos.init({ duration: 2000});
  }, []);
        return(
    <div id="home" className="content" >
        <div className="content-col" >
          <div className="content-text" data-aos="zoom-in" >
                <h1 className="first-text">Hello There!</h1>
                <h1 className="second-text">I'm John Lester</h1>
                <p className="staticTxt">I'm a{' '}
                <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  'Front-End Developer', 
                  4000,
                  'Designer',
                  2000
                ]}/>
                  </p>
                  
          </div> 
            <div className='soc-icons' data-aos="zoom-in">
              <Link
                className='social-icon-link'
                to='//www.facebook.com/jhonlester0111/'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </Link>
              <Link
                className='social-icon-link'
                to='//www.instagram.com/johnlester0111/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </Link>
              <Link
                className='social-icon-link'
                to={
                  '//www.youtube.com/channel/UCbPEWqX135wPDDI-dsTbXcg'
                }
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </Link>

              <Link
              className='social-icon-link'
              to='//github.com/JHONZY?tab=repositories'
              target='_blank'
              aria-label='Github'
            >
              <BsGithub />
              </Link>
              
          </div>
        </div>
      </div>
)

}

export default Home