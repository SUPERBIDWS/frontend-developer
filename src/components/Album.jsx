import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import LightboxPage from './LightBox'
import * as actions from '../store/actions';

class Album extends Component {
  
    render() {

        const { photos, albumId } = this.props
        console.log(albumId)
        return (

            <div className='container'>
                <div className='albunsPhotos'>
                
                    <Link to="/" className='btnBack'> Voltar aos Albuns</Link>
                    <div className='capaAlbum'>
                        <h1>{!albumId ? 'Volte e escolha um álbum.' : `Album ${albumId}`}</h1>
                    </div>
                    <div className='photos'>
                        <LightboxPage photos={photos} />
                    </div>
                   
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albumId: state.albuns.albumId,
    photos: state.albuns.photos,
})

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)