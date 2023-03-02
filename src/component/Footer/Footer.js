import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'> © 2021 All rights reserved.</small>
          <div className='social-icons'>
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
      </section>
    </div>
  );
}

export default Footer;