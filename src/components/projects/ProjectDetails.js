import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Titulo del proyecto {id}
          </span>
          <p>
          The Net Ninja
          577.000 suscriptores
          Hey gang, in this React, Redux & Firebase tutorial we'll create the template for our project details component. We'll also set up a route to load the component in. 
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Alekz</div>
          <div>12 de Octubre de 2020</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;