import {Link, useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Planet = () => {
  const {id} = useParams()
  const navigation = useNavigate()
  const [planet, setPerson] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then(res => res.json())
      .then((data) => {
         setPerson(data)
        setIsLoading(false)
      }
      )
  },[])

    const getBack = () =>{
     navigation('/planets')
  }

  if (isLoading){
    return  'loading'
  }


  return (
    <div>
    <button onClick={getBack}>Back</button>
      <Link to={'/planets'}>Back</Link>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Orbital period: {planet.orbital_period}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
};

export default Planet;