import React from 'react';
import PhotoDimmer from './PhotoDimmer.jsx';

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCarousel: false,
      carouselId: null,
    }
    this.clickPhoto = this.clickPhoto.bind(this);
    this.clickX = this.clickX.bind(this);
  }
  clickPhoto(id) {
    console.log(id);
    this.setState({ showCarousel: true, carouselId: id - 1 });
  }
  clickX() {
    this.setState({ showCarousel: false });
  }
  render() {
    if (!this.state.showCarousel) {
      return (
        <div className="photo-grid-container">
          <div>
            <h2 className="photo-grid-header">{this.props.photos.length} Photos</h2>
          </div>
          <div className="photo-grid-grid-container">
            <div className="photo-grid-left">
              <img className="photo-grid-list-img" src={this.props.photos[0].url} onClick={() => this.clickPhoto(this.props.photos[0].id)} />
              <img className="photo-grid-list-img-center" src={this.props.photos[1].url} onClick={() => this.clickPhoto(this.props.photos[1].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[2].url} onClick={() => this.clickPhoto(this.props.photos[2].id)} />
            </div>
            <div className="photo-grid-right">
              <img className="photo-grid-list-img" src={this.props.photos[3].url} onClick={() => this.clickPhoto(this.props.photos[3].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[4].url} onClick={() => this.clickPhoto(this.props.photos[4].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[5].url} onClick={() => this.clickPhoto(this.props.photos[5].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[6].url} onClick={() => this.clickPhoto(this.props.photos[6].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[7].url} onClick={() => this.clickPhoto(this.props.photos[7].id)} />
              <div className="photo-grid-list-img-last-text" onClick={() => this.clickPhoto(this.props.photos[8].id)} >+ {this.props.photos.length - 10} more</div>
              <img className="photo-grid-list-img-last-photo" src={this.props.photos[8].url} onClick={() => this.clickPhoto(this.props.photos[8].id)} style={{ height: "100%" }} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="photo-grid-container">
          <div>
            <h2 className="photo-grid-header">{this.props.photos.length} Photos</h2>
          </div>
          <div className="photo-grid-grid-container">
            <div className="photo-grid-left">
              <img className="photo-grid-list-img" src={this.props.photos[0].url} onClick={() => this.clickPhoto(this.props.photos[0].id)} />
              <img className="photo-grid-list-img-center" src={this.props.photos[1].url} onClick={() => this.clickPhoto(this.props.photos[1].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[2].url} onClick={() => this.clickPhoto(this.props.photos[2].id)} />
            </div>
            <div className="photo-grid-right">
              <img className="photo-grid-list-img" src={this.props.photos[3].url} onClick={() => this.clickPhoto(this.props.photos[3].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[4].url} onClick={() => this.clickPhoto(this.props.photos[4].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[5].url} onClick={() => this.clickPhoto(this.props.photos[5].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[6].url} onClick={() => this.clickPhoto(this.props.photos[6].id)} />
              <img className="photo-grid-list-img" src={this.props.photos[7].url} onClick={() => this.clickPhoto(this.props.photos[7].id)} />
              <div className="photo-grid-list-img-last-text" onClick={() => this.clickPhoto(this.props.photos[8].id)} >+ {this.props.photos.length - 10} more</div>
              <img className="photo-grid-list-img-last" src={this.props.photos[8].url} onClick={() => this.clickPhoto(this.props.photos[8].id)} />
            </div>
          </div>
          <PhotoDimmer photos={this.props.photos} id={this.state.carouselId} clickX={this.clickX} />
        </div>
      );
    }
  }
}

export default PhotoGrid;
