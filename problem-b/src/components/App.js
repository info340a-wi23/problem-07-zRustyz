import React, { useState } from 'react';
import { AboutNav } from './Navigation';
import { BreedNav } from './Navigation';
import PetList from './PetList';


function App(props) {

  const [list, updatePets] = useState(props.pets);

  let uniqueBreeds = [];
  props.pets.forEach((pet) => {
    if (!uniqueBreeds.includes(pet.breed)) {
      uniqueBreeds.push(pet.breed);
    }
  })

  const adoptPet = (name) => {
    const newArr = list.map((pet) => {
      if (pet.name === name) {
        pet.adopted = true;
      }
      return pet;
    })
    updatePets(newArr);
  }


  return (
    <div>
    <header className="jumbotron jumbotron-fluid py-4">
      <div className="container">
        <h1>Adopt a Pet</h1>
      </div>
    </header>

    <main className="container">
      <div className="row">
        <div id="navs" className="col-3">
          <BreedNav breeds={uniqueBreeds} />
          <AboutNav />
        </div>

        <div id="petList" className="col-9">
          <PetList pets={list} adoptCallback={adoptPet}/>
        </div>
      </div>
    </main>

    <footer className="container">
      <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
    </footer>
  </div>
  );
}

export default App;
