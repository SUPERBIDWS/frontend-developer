import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AlbumsPage from './components/album/AlbumsPage';
import AlbumPage from './components/album/AlbumPage'; 

export default (
  <Route path="/" component={App}>
    <Route path="albums" component={AlbumsPage} />
    <Route path="album/:id" component={AlbumPage} />
  </Route>
);
