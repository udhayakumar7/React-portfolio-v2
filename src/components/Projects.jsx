import React from 'react'

const Projects = ({index, title, manageModal}) => {
    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={"project"}>
                <h2>{title}</h2>
                <p>Design & Development</p>
        </div>
      )
    }


export default Projects
