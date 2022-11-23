import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container className='p-4 my-4 d-flex gap-5'>
        <a href='https://www.linkedin.com/in/coleamlong/' className='d-flex gap-2 text-decoration-none'>
            <i className='fa-brands fa-linkedin text-primary fs-1' />
            <h3 className='text-dark'>coleamlong</h3>
        </a>
        <div className='d-flex gap-2 text-decoration-none'>
            <i className='fa-solid fa-envelope text-success fs-1' />
            <h3 className='text-dark'>coleamlong@utexas.edu</h3>
        </div>
        <div className='d-flex gap-2 text-decoration-none'>
            <i className='fa-solid fa-phone text-info fs-1' />
            <h3 className='text-dark'>(317) 644-9178</h3>
        </div>
    </Container>
  )
}

export default Contact