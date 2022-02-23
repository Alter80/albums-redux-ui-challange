import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleAlbum from './SingleAlbum';


const AllAlbums = () => {
    const allAlbums = useSelector(state => state.albums.allAlbums)
    const LocalAlbums = useSelector(state => state.albums.localAlbums)
    const qobuzAlbums = useSelector(state => state.albums.qubuzAlbums)

    const [albumSource, setAlbumSource] = useState(['All', 'Local', 'QOBUZ']);
    const [selectedStatus, setSelectedStatus] = useState('All');


    // selection for filter
    const handleChange = e => {
        setSelectedStatus(e.target.value)
        console.log(e.target.value)
    }

    // filtered Results 
    const filteredResult = () => {
        if (selectedStatus == 'All') {
            return (<Row xs={1} md={3} lg={6} >
                {
                    allAlbums.map(album => <SingleAlbum
                        key={album.id}
                        album={album}
                    ></SingleAlbum>)
                }
            </Row>)
        }
        else if (selectedStatus == 'Local') {
            return (<Row xs={1} md={3} lg={6} >
                {
                    LocalAlbums.map(album => <SingleAlbum
                        key={album.id}
                        album={album}
                    ></SingleAlbum>)
                }
            </Row>)
        }
        else if (selectedStatus == 'QOBUZ') {
            return (<Row xs={1} md={3} lg={6} >
                {
                    qobuzAlbums.map(album => <SingleAlbum
                        key={album.id}
                        album={album}
                    ></SingleAlbum>)
                }
            </Row>)
        }
    }

    return (
        <div className='container mx-auto p-5 bg-dark'>
            <div className='container d-md-flex justify-content-between my-3'>
                {/* Dummy search */}
                <div className='p-2'>
                    <form className='d-flex h-75  '>
                        <input
                            className='form-control p-3  text-center bg-dark'
                            type="search"
                            name="search user"
                            id=""
                            placeholder='search by album'
                        />
                        <Button type="submit" variant="outline-warning" className='text-white rounded' >Search</Button>
                    </form>
                </div>

                {/* Filter option */}
                <div className='p-2'>
                    <select
                        className='rounded bg-dark text-white p-3'
                        onChange={e => handleChange(e)}

                    >

                        {albumSource.map((albumtype, index) =>
                            <option className='mx-auto text-center' key={index} value={albumtype}>{albumtype}</option>
                        )}
                    </select>

                </div>

            </div>

            {
                filteredResult()
            }

            <div className='px-5 my-4'>
                <Link to='/'>
                    <Button variant="outline-warning" className='text-white text-uppercase px-5 py-3' >Back</Button>
                </Link>
            </div>

            {/* <Row xs={1} md={3} lg={6} >
                {
                    allAlbums.map(album => <SingleAlbum
                        key={album.id}
                        album={album}
                    ></SingleAlbum>)
                }
            </Row> */}
        </div>
    );
};

export default AllAlbums;