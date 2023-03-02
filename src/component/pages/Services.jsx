import React from 'react'
import '../pages/Services.css'
import { MdMonitor } from 'react-icons/md'
import { MdOutlineWeb } from 'react-icons/md'
import { MdDeveloperMode } from 'react-icons/md'

function Services() {
  return (
    <div className='Services'>
        <p className='parag'>what i will do for you</p>
            <h1 className='service-title'>Services</h1>
                <div className='services-content'>
                    <div className='content-box'>
                    <div className='icon'>
                    <MdMonitor />
                    </div>

                        <h2>Web Design</h2>
                            <p className='parag'>I do ui/ux design for websites, which helps them stand out.</p>
                    </div>

            <div className='content-box'>
                <div className='icon'>
                    <MdOutlineWeb />
                </div>

                        <h2>Web Dev</h2>
                        <p className='parag'>I do ui/ux design for websites, which helps them stand out.</p>
            </div>

            <div className='content-box'>
                <div className='icon'>
                    <MdDeveloperMode />
                </div>
                        <h2>App Dev</h2>
                        <p className='parag'>I do ui/ux design for websites, which helps them stand out.</p>
            </div>
        </div>
    </div>
  )
}

export default Services