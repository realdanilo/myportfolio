import React from 'react'
import data from '../data'
import Project from '../components/Project'
import '../css/Home.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
export default function Home() {
    return (
        <>
            <div className="main-container">
                <h3 className="projects">Projects</h3>
                <div className="project-grid">
                    {data.map((project, i) => <Project key={project.id} project={project} />)}
                </div>
                <div className="footer"></div>
            </div>
            <div className="social">
                <a rel="noopener noreferrer" href="https://github.com/realdanilo" target="_blank"><AiFillGithub /></a>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/danilomera/" target="_blank"> <AiFillLinkedin /></a>
            </div>
        </>
    )
}
