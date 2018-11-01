import React, { Component } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class ListaAlbum extends Component {
    state = {
        albuns: []
    }

    componentDidMount() {
        this.carregaAlbuns();
    }

    carregaAlbuns = async() => {
        const response = await api.get('/albums');

        const albunsApi = response.data;

        this.setState({
            albuns: albunsApi
        });
    }

    render() {
        const { albuns } = this.state;

        return (
            <div className="album-wrapper">
                {albuns.map(album => (
                    <div className="album-content" key="{album.id}">
                        <h2>ID: {album.id}</h2>
                        <h3>Album: {album.title}</h3>
                        
                        <Link to={`/album/${album.id}`}>Acessar</Link>
                    </div>
                ))}
            </div>
        )
    }
}