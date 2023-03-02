import React, { useEffect } from 'react'
import '../pages/Project.css';

import { Button } from '../Button';
import { BsEyeFill } from 'react-icons/bs'

import portfolio from '../picture/portfolio.png'

import Aos from 'aos'
import 'aos/dist/aos.css'


function Project() {
  useEffect(()=> {
    Aos.init({ duration: 2000});
  }, []);

return (
  <>
  <div id='project' className="Project">
    <h1 data-aos='zoom-in'>Project</h1>
      <div className='Project-content'>

        <div className="card" data-aos="fade-up">
          <div className='box'>
            <img src={portfolio} className='img' alt='true' />
              <div className='titleContainer'>
                <span className='projtitle'>My Portfolio</span>
                <span className='projStats inprog'>In-Progress</span>
              </div>

            <a href='http://localhost:3000/Portfolio'  rel="noreferrer" target="_blank" >
              <Button buttonStyle='btn--project' buttonSize='project--medium'>
              <BsEyeFill className='icon'/><span className='git'>Visit</span>
              </Button>
            </a>

            <div className='descrip'>
              <p className='projDescrip'>Lorem ipsum dolor sit amet. Aut similique quia id accusamus reiciendis ut possimus maiores! 
                                          Aut atque cupiditate et eligendi fugiat qui omnis corrupti ut mollitia magnam qui labore iste 
                                          sed distinctio nulla sed voluptate maiores
              </p>
            </div>

            <div className='tag-container'>
              <span className='small-boxes'>React</span>
              <span className='small-boxes'>Ract Hooks</span>
            </div>

      
    </div>
  </div>


  {/* <div className="card" data-aos="fade-up">
    <div className='box'>
      <img src={React2} className='img' alt='true' />
    
        <div className='titleContainer'>
          <span className='projtitle'>Pizza Hub</span>
          <span className='projStats'>Done</span>
        </div>

        <Link to='/Contactform'
              target="blank">
          <Button buttonStyle='btn--project' buttonSize='project--medium'>
          <BsEyeFill className='icon'/><span className='git'>Visit</span>
          </Button>
        </Link>

        <div className='descrip'>
          <p className='projDescrip'>Lorem ipsum dolor sit amet. Aut similique quia id accusamus reiciendis 
                                      ut possimus maiores! Aut atque cupiditate et eligendi fugiat qui omnis 
                                      corrupti ut mollitia magnam qui labore iste sed distinctio nulla sed voluptate maiores
          </p>
        </div>


        <div className='tag-container'>
          <span className='small-boxes'>HTML</span>
          <span className='small-boxes'>CSS</span>
          <span className='small-boxes'>JavaScript</span>
        </div>

    </div>
  </div>


    <div className="card" data-aos="fade-up">
      <div className='box'>
        <img src={React3} className='img' alt='true' />

          <div className='titleContainer'>
            <span className='projtitle'>Beauty Products Website</span>
            <span className='projStats'>Done</span>
          </div>

          <Link to='/Contactform'
              target="blank">
          <Button buttonStyle='btn--project' buttonSize='project--medium'>
          <BsEyeFill className='icon'/><span className='git'>Visit</span>
          </Button>
        </Link>

          <div className='descrip'>
            <p className='projDescrip'>Lorem ipsum dolor sit amet. Aut similique quia id accusamus reiciendis ut possimus maiores!
                                       Aut atque cupiditate et eligendi fugiat qui omnis corrupti ut mollitia magnam qui labore iste 
                                       sed distinctio nulla sed voluptate maiores
            </p>
          </div>

          <div className='tag-container'>
            <span className='small-boxes'>HTML</span>
            <span className='small-boxes'>CSS</span>
          </div>

      </div>
    </div>

    <div className="card" data-aos="fade-up">
      <div className='box'>
        <img src={React4} className='img' alt='true' />

          <div className='titleContainer'>
            <span className='projtitle'>Coffee Shop</span>
            <span className='projStats'>Done</span>
          </div>

          <Link to='/Contactform'
              target="blank">
          <Button buttonStyle='btn--project' buttonSize='project--medium'>
          <BsEyeFill className='icon'/><span className='git'>Visit</span>
          </Button>
        </Link>

          <div className='descrip'>
            <p className='projDescrip'>Lorem ipsum dolor sit amet. Aut similique quia id accusamus reiciendis ut possimus maiores!
                                       Aut atque cupiditate et eligendi fugiat qui omnis corrupti ut mollitia magnam qui labore iste 
                                       sed distinctio nulla sed voluptate maiores
            </p>
          </div>

        <div className='tag-container'>
          <span className='small-boxes'>HTML</span>
          <span className='small-boxes'>CSS</span>
        </div> */}
{/* 
      </div>
    </div> */}
  </div>
</div>
  
  </>
)
}

export default Project;
