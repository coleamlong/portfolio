import React from 'react'
import { Container, ProgressBar } from 'react-bootstrap'

const Skill = (props) => {
    const {id, name, rating} = props.skill
  return (
    <Container style={id % 2 === 1 ? {backgroundColor: "WhiteSmoke"} : {}} className='d-flex w-100 p-3'>
        <Container className='w-25 text-center'>
            <h3>{name}</h3>
        </Container>
        <Container>
            <ProgressBar variant='success' style={{marginTop: ".5rem", height: "30px"}} now={rating * 10} />
        </Container>
    </Container>
  )
}

export default Skill