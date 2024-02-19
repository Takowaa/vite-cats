import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Planets = () => {

  const [planets, setPlanets] = useState([])

  useEffect(()=>{
    fetch('https://swapi.dev/api/planets')
      .then(res => res.json())
      .then(data => setPlanets(data.results))
  },[])

  return (
    <div>
      {
        planets.map((planet,idx) =>(
          <div key={idx}>
            <Link to={`/planets/${idx+1}`}>{planet.name}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default Planets;