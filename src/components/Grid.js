import React from 'react'
import { Link } from 'react-router-dom'
// css in Home.css
export default function Grid({ project, number }) {
    const { name, url, image, id } = project
    const style = {
        background: `url(${image}) no-repeat center center`,
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        BackgroundSize: "cover",
        width: "100%",
        gridArea: `n${number}n`
    }
    return (
        <div style={style} className={`grid grid-${number}`}>
            <div className="grid-links">
                <a href={url} target="_blank">{name}</a><br />
                <Link to={`/project/${id}`} >Info</Link>
            </div>
        </div>
    )
}
