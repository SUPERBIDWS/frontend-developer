import React from 'react'

import { Link } from 'react-router-dom'

export default props => (
    props.itensPage.map(album => (
        <Link 
        key={album} 
        to={`album/${album}`} 
        className='cardAlbum'
        onClick={() => props.getPhotos(album)} >
            <div >
                Album {album}
            </div>
        </Link>
    ))
)