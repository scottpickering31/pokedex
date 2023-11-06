import React from 'react'
import './App.css'

function NameContainer({name, id}) {
  return (
    <>
    <div className="name-container">
        <p className="pokemon-id">Pokemon No: {id}</p>
        <p className="pokemon-name">{name.toUpperCase()}</p>
    </div>
    </>
  )
}

export default NameContainer