import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import './error.css'

function Errorpage() {
  return (
    <div className='section'>
        <h1>Oops!</h1>
        <h2>404</h2>
        <p>PAGE NOT FOUND</p>
        <Link to="#home">
          <Button buttonStyle="btn--project" buttonSize='project--medium'>Back to Home</Button>
        </Link>
    </div>
  )
}

export default Errorpage