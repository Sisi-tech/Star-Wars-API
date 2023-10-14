import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function fetchPeople() {
      let res = await fetch('https://www.swapi.tech/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch('https://www.swapi.tech/api/plantes/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchPlanets();
  },[]);

  return (
    <>
    </>
  );
}

export default App
