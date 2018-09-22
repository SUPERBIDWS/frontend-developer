import * as types from './actionTypes';
import Axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export const loadAlbumsSuccess = (albums) => {
  return { type: types.LOAD_ALBUMS_SUCCESS, albums};
};

export const loadAlbums = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(loadAlbumsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};









