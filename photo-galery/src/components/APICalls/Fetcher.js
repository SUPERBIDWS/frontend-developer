import React, { Component } from "react";
import AlbumsContainer from "../AlbumsContainer";

let num = 12;

class Fetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      album: 1,
      mode: "album",
      isLoading: false,
      error: false
    };
  }

  async changeModeToImage(albumNum) {
    this.setState({ mode: "image" });
    await this.setState({ albums: [] });
    this.fetchData(this.state.mode, albumNum, 12);
  }

  async changeModeToAlbum(e) {
    this.setState({ mode: "album" });
    await this.setState({ albums: [] });
    this.fetchData(this.state.mode, null, 12);
  }

  fetchData(mode, albumNUm, max) {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(results => {
        if (!results.ok || results.status !== 200) {
          return <h2>Error</h2>;
        }
        return results.json();
      })
      .then(data => {
        let displayData = [];
        let maxDisplay = max;
        let curAlbum = 1;
        data.map(async item => {
          if (displayData.length < maxDisplay) {
            if (mode === "album") {
              if (item.albumId === curAlbum) {
                curAlbum += 1;
                return displayData.push({
                  ...item
                });
              }
            } else if ((mode = "image")) {
              curAlbum = albumNUm;
              if (item.albumId === curAlbum) {
                this.setState({ album: curAlbum });
                return displayData.push({ ...item });
              }
            }
          } else {
            return;
          }
        });
        this.setState({ ...this.state, albums: [...displayData] });
        return <script />;
      });
  }

  componentDidMount() {
    this.changeModeToAlbum();
  }

  render() {
    return (
      <AlbumsContainer
        albums={this.state.albums}
        album={this.state.album}
        onClick={this.changeModeToImage.bind(this)}
        albumMode={this.changeModeToAlbum.bind(this)}
        mode={this.state.mode}
      />
    );
  }
}

export default Fetcher;
