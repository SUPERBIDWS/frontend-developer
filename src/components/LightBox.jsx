import React from "react";
import Lightbox from "react-image-lightbox";
import '../LighBox.css';

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [],
    thumbs: []
  }

  componentDidMount() {
    const urls = this.props.photos.map(photo => photo.url)
    console.log(urls)
    this.setState({
      images: urls
    })
  }


  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <div key={photoIndex} className='thumbs'>
          <figure>
            <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
              this.setState({ photoIndex: privateKey, isOpen: true })
            }
            />
          </figure>
        </div>
      );
    })
  }

  render() {
    console.log(this.props)
    const { photoIndex, isOpen, images } = this.state;
    return (
     
        <div className="lightBox-content">
          {this.renderImages()}
       

        <div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </div>
      </div>
    );
  }
}

export default LightboxPage;