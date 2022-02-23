import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetAlbums = () => {


    return (
        <div className='container mx-auto p-5 bg-dark'>
            <Link to='/allalbums'>
                <Button variant="outline-warning" className='text-white text-uppercase px-5 py-3' >Get Albums</Button>
            </Link>
        </div>
    );
};

export default GetAlbums;