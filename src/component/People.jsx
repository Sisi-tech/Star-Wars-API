import React, { useEffect } from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function People( { data }) {
    return (
        <div className='content-container'>
            <h1>People</h1>
            <Grid columns={4}>
                {data.map((person, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card style={{ backgroundColor: '#fdf2f2' }}>
                                <Card.Content className='custom-card-content'>
                                    <Card.Header>{person.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Height</strong>
                                        <p>{person.height}</p>
                                        <strong>Gender</strong>
                                        <p>{person.gender}</p>
                                        <strong>Mass</strong>
                                        <p>{person.mass}</p>
                                        <strong>Hair Color</strong>
                                        <p>{person.hair_color}</p>
                                        <strong>Eye Color</strong>
                                        <p>{person.eye_color}</p>
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