import React from 'react'
import data from '../data'
import '../css/Home.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Grid from '../components/Grid'
export default function Home() {
    return (
        <>
            <a className="new-website" href="https://realdanilo.vercel.app/" target="_blank">New Website</a>
            <div className="main-container">
                <div className="project-grid-ui">
                    {data.map((project, i) => <Grid key={i} project={project}  />)}
                </div>

            </div>
            <div className="social">
                <a rel="noopener noreferrer" href="https://github.com/realdanilo" target="_blank"><AiFillGithub /></a>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/danilomera/" target="_blank"> <AiFillLinkedin /></a>
            </div>
        </>
    )
}
