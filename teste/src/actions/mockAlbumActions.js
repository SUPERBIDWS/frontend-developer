import * as types from './actionTypes';
import albumApi from '../api/mockAlbumApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAlbumsSuccess(albums) {
  return { type: types.LOAD_ALBUMS_SUCCESS, albums};
}

export function loadAlbums() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return albumApi.getAllAlbums().then(albums => {
      dispatch(loadAlbumsSuccess(albums));
    }).catch(error => {
      throw(error);
    });
  };
}

