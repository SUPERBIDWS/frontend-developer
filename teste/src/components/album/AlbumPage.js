import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as albumActions from '../../actions/albumActions';
import AlbumDetail from './AlbumDetail';

export class AlbumPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      album:  props.album,
    };
  }

  render() {
    return (
      <AlbumDetail
        album={this.state.album}
      />
    );
  }
}

AlbumPage.propTypes = {
  album: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

AlbumPage.contextTypes = {
  router: PropTypes.object
};

function getAlbumById(albums, albumId) {
  const album = albums.filter(album => album.albumId == albumId);
  if (album) return album; 
  return null;
}

function mapStateToProps(state, ownProps) {
  const albumId = ownProps.params.id;

  let album = []

  if (albumId && state.albums.length > 0) {
    album = getAlbumById(state.albums, albumId);
  }

  return {
    album: album,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(albumActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
