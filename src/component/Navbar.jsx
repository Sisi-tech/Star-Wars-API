import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <Menu inverted>
                <Container>
                    <Link to='/' className="menu-item">
                        <Menu.Item name="star wars API" />
                    </Link>
                    <Link to='/people' className="menu-item">
                        <Menu.Item name="people" />
                    </Link>
                    <Link to='/planets' className="menu-item">
                        <Menu.Item name="planets" />
                    </Link>
                </Container>
            </Menu>
        </div>
    );
}