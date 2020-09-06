import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiJavascript, SiMongodb } from 'react-icons/si'
import '../css/About.css'

export default function About() {
    return (
        <div>

            <div className="about-container">
                <div className="me">
                    <h5>About Me</h5>
                    <p>I am Software Developer located in Phoenix Area. My main stack expertise is MERN, but I also know MySQL and some python.</p>
                    <p>I have an undergraduate in Business with a focus on Data Analytics. </p>
                    <p> I strongly believe that I can help your organization because I have an understanding from differents sides: the business, the customer, and the IT world.</p>
                </div>
                <div className="stack-components">
                    <h5>Front End</h5>
                    <p>HTML, CSS, JS, React, ejs</p>
                    <h5>Back End</h5>
                    <p>Node, Express, Mongo DB, MySQL</p>
                    <h5>Tools</h5>
                    <p>Git, Bash command, Slack </p>
                    <h5>Other</h5>
                    <p>Advance Excel(Macros), Power BI, Tableau, Lean/Kaizen </p>
                </div>
            </div>
            <h4 className="powered-by">Portfolio is powered by React JS</h4>
            <div className="about-logos">
                <AiFillHtml5 /><FaCss3Alt /><SiJavascript /><FaReact /><SiMongodb />
            </div>
        </div>
    )
}
