import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListaAlbum from './pages/album/lista-album';
import FotoAlbum from './pages/album/foto-album';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ListaAlbum} />
            <Route path="/album/:id" component={FotoAlbum} />
        </Switch>
    </BrowserRouter>
);

export default Routes;