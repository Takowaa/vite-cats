import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const People = () => {

  const [people, setPeople] = useState([])

  useEffect(()=>{
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(data => setPeople(data.results))
  },[])

  return (
    <div>
      {
        people.map((person,idx) =>(
          <div key={idx}>
            <Link to={`/people/${idx+1}`}>{person.name}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default People;