import React, { Component } from "react";
import AlbumItem from "./AlbumItem";
import Header from "./Header";

class AlbumsContainer extends Component {
  state = {
    album: 1
  };

  async setAlbum(num) {
    await this.setState({ album: num });
    if (this.props.mode === "album") {
      this.props.onClick(this.state.album);
    }
  }

  render() {
    const { albums, album, albumMode, mode } = this.props;
    return (
      <div id="AlbumContainer_component">
        {mode === "image" ? <Header album={album} /> : null}
        {albums.map(album => {
          return (
            <AlbumItem
              key={mode === "image" ? album.id : album.albumId}
              title={album.title}
              thumbnailUrl={album.thumbnailUrl}
              albumId={album.albumId}
              id={album.id}
              mode={mode}
              onClick={this.setAlbum.bind(this)}
            />
          );
        })}
        {mode === "image" ? (
          <button className="back-button" onClick={albumMode}>
            Back
          </button>
        ) : null}
      </div>
    );
  }
}

export default AlbumsContainer;
