import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class Imagem extends Component {
  constructor ( props ){
    super ( props );
  }
  render() {
    return (
      <div style={{ width:'calc(33.3% - 10px)', margin:5, display:'inline-block'}} onClick={this.props.clickImg}>
        <img style={{ width:'100%', cursor:'pointer'}} src={this.props.thumbnailUrl} />
      </div>
    );
  }
}

class AlbumDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photo: false,
      url: '',
    };
  }

  openPhoto(urlimage){
    this.setState({ photo: true, url: urlimage });
  }
  closePhoto(){
    this.setState({ photo: false });
  }
  redirect() {
    window.history.back();
  }
  

  render() {
    const {album} = this.props;

    return (
      <div>
        <div style={{"height" : "50%", "width" : "100%", padding:50,textAlign:'center', backgroundColor:'gray', color:'white'}}>
          <h1 onClick={() => this.redirect()}>Álbum {album[0].albumId}</h1>
        </div>
       {Array.isArray(album) && album.map((item, i) => {
            return(
              <Imagem thumbnailUrl={item.thumbnailUrl} clickImg={() => this.openPhoto(item.url)}/>
            )
        })}

        {this.state.photo &&
          <div style={{position:'fixed', width:'100%', height:'100%', top:0, left:0, backgroundColor:'rgba(0, 0, 0, 0.5)'}} onClick={() => this.closePhoto()}>
            <div style={{position:'fixed', margin: 'auto', width:'80%', height:'80%', top:'50%', left:'50%', marginTop:'-40%', marginLeft:'-40%'}}>
              <img style={{ width:'100%'}} src={this.state.url} />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default AlbumDetail;
