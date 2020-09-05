import React from 'react'
import '../css/Project.css'
export default function Project({ project }) {
    const { name, url, github, description, stack, main } = project
    return (
        <div className="project-container">
            <h3 className="project-title">{name}</h3>
            <p>{description}</p>
            <h5>Stack</h5>
            <ul className="content">
                {stack.map((st, i) => <li key={i}>{st}</li>)}

            </ul>
            <h5>Main Features</h5>
            <ul className="content">
                {main.map((m, i) => <li key={i}>{m}</li>)}
            </ul>

            <div className="project-links">
                <a rel="noopener noreferrer" href={`${url}`} target="_blank">Live</a>
                {github.length > 1 && <a rel="noopener noreferrer" href={`${github}`} target="_blank">Github</a>}
            </div>
        </div>
    )
}
