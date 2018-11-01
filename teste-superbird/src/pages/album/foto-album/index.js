import React, { Component } from 'react';
import ModalImage from 'react-modal-image'
import api from '../../../services/api';

import './styles.css';

export default class FotoAlbum extends Component {
    state = {
        fotos: [],
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.carregaFotos(id);
    }

    carregaFotos = async(id) => {
        const response = await api.get(`/photos?albumId=${id}`);
        
        const fotosApi = response.data;

        this.setState({
            fotos: fotosApi
        });
    }

    render() {
        const { fotos } = this.state;


        return (
            <div className="foto-wrapper">
                <div className="foto-header">
                    <h1>Fotos Album </h1>
                </div>
                <main className="foto-item">
                    {fotos.map(foto => (
                        <ModalImage key={foto.id} className="foto-content"
                        small={foto.thumbnailUrl}
                        large={foto.url}
                        alt={foto.titulo} />
                    ))}
                </main>
            </div>
        )
    }
}