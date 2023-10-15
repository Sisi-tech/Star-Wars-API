import React from 'react';

const Home = function() {
    return (
        <div className='content-container home-container'>
            <a href="https://swapi.dev/documentation#">SWAPI - The Star Wars API</a>
            <hr />
           <h2>What is the Star Wars API?</h2>
           <p>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!</p>
           <h2>Which data format does the API Swapi Dev use when responding to HTTP GET requests?</h2>
           <p>JSON is the standard data format provided by SWAPI by default.</p>
        </div>
    );
}

export default Home; 