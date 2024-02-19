import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Person = () => {
  const {id} = useParams()
  const [person, setPerson] = useState({})
useEffect(()=>{
  fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
    .then(data => setPerson(data))
},[])

  return (
    <div>

      <h2>{person.name}</h2>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Gender: {person.gender}</p>
      <p>Skin color: {person.skin_color}</p>
    </div>
  );
};

export default Person;