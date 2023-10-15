import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import './App.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import People from './component/People';
import Planets from './component/Planets';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  // https://swapi.dev/documentation

  useEffect(()=>{
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchPlanets();
  },[]);
  console.log(people);
  console.log(planets)
  return (
    <>
    <Router>
      <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People  data={people}/>} />
              <Route path="/planets" element={<Planets data={planets}/>} />
            </Routes>
          )}
        </Container>
    </Router>
    </>
  );
}

export default App
