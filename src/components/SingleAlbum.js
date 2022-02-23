import React from 'react';
import { Card, Col } from 'react-bootstrap';
import test from '../assets/covers/qobuz_9782849070550.jpg'
import streamingLogo from '../assets/images/qobuz.png'

const SingleAlbum = (props) => {

    const { id, source, artist, album, cover } = props.album;

    const showImage = (cover) => {
        if (cover !== null) {
            const imgLink = `/assets/covers/${cover}`
            return imgLink;
        }
        else {
            const imgNull = `/assets/images/undefined_album_cover.png`;
            return imgNull;
        }
    }

    // from streaming service
    const streamLogo = (source) => {
        if (source == 'QOBUZ') {
            return <img className='position-absolute m-2 bottom-0 end-0' height='30px' src={streamingLogo} alt="" srcset="" />
        }
    }

    return (
        <Col className='p-2'>
            <Card className='bg-dark text-white h-100'>

                <div className='position-relative'>
                    <Card.Img variant="top" src={showImage(cover)} />
                    {
                        streamLogo(source)
                    }
                </div>


                <Card.Body className='text-start'>
                    <h6 >{album}</h6>
                    <Card.Text className='text-muted'>
                        {artist}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleAlbum;