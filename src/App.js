import React from 'react'
import GlobalNavbar from './components/GlobalNavbar'
import Project from './components/Project'
import ProjectInfo from './static/ProjectInfo'
import {LanguageInfo, TechInfo, IdeaInfo} from './static/SkillInfo'
import {Container} from "react-bootstrap"
import Skill from "./components/Skill"

import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'

const App = () => {
  return (
    <Container className='w-100'>
      <GlobalNavbar />
      <Container id="home">
      <Header />

      </Container>
      <Container id="about">
        <About />

      </Container>
      <h1 id="projects" className='text-center m-3 p-3'>Projects</h1>
      <Container className='d-flex flex-column gap-4'>
        {ProjectInfo.map(project => {
          return (
            <Project key={project.id} flipped={project.id % 2 === 1} project={project} />
          )
        })}
      </Container>
      <h1 id="skills" className='text-center m-3 p-3'>Skills</h1>
      <Container>
        <h2 className='text-center p-2'>Languages</h2>
        <Container>
          {LanguageInfo.map(skill => {
            return (
              <Skill key={skill.id} skill={skill} />
            )
          })}
        </Container>
        <h2 className='text-center p-2 mt-3'>Technologies</h2>
        <Container>
          {TechInfo.map(skill => {
            return (
              <Skill key={skill.id} skill={skill} />
            )
          })}
        </Container>
        <h2 className='text-center p-2 mt-3'>Ideas</h2>
        <Container>
          {IdeaInfo.map(skill => {
            return (
              <Skill key={skill.id} skill={skill} />
            )
          })}
        </Container>
      </Container>
      <h1 id="contact" className='text-center m-3 p-3'>Get in Touch</h1>
      <Contact />
    </Container>

  )
}

export default App