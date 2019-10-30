import React from 'react';

const Oferta = (props) => {
  const skills = props.skills.map(skill => {
    return <li key={skill}>{skill}</li>
  })

  return (
    <div>
      <h3>{props.nombre} ({props.ciudad})</h3>
      <p>{props.descripcion}</p>
      <ul>
        {skills}
      </ul>
    </div>
  )
}

export default Oferta;