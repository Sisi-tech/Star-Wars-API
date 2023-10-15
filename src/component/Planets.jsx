import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import './../index.css';


export default function Planets({ data }) {
    return (
        <div className='content-container'>
        <h1>Planets</h1>
        <Grid columns={4}>
            {data.map((planet, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card style={{ backgroundColor: '#fdf2f2' }}>
                            <Card.Content>
                                <Card.Header>{planet.name}</Card.Header>
                                <Card.Description>
                                    <strong>Climate</strong>
                                    <p>{planet.climate}</p>
                                    <strong>Diameter</strong>
                                    <p>{planet.diameter}</p>
                                    <strong>Population</strong>
                                    <p>{planet.population}</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </div>
    );
}