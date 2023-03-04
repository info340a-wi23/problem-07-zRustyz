import React from 'react';

function PetCard(pet, adoptCallback) {
  return(
    <div className="card" key={pet.name} onClick={() => adoptCallback(pet.name)}>
      <img className="card-img-top" src={pet.img} alt={pet.name} />
      <div className="card-body">
        <h3 className="card-title">{pet.name}{pet.adopted ? ' (Adopted)' : ''}</h3>
        <p className="card-text">{pet.sex + " " +pet.breed}</p>
      </div>
    </div>
  )
}

function PetList(props) {
  return (
    <div>
      <h2>Dogs for Adoption</h2>
      <div className='card-deck'>
      {props.pets.map((pet) => PetCard(pet, props.adoptCallback))}
      </div>
    </div>
  )
}

export default PetList;