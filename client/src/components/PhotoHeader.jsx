import React from 'react';
import ReportPhotoMenu from './ReportPhotoMenu.jsx';
import SaveRestaurant from './SaveRestaurant.jsx';
import PhotoDimmer from './PhotoDimmer.jsx';

class PhotoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselId: null,
      showCarousel: false,
      reportContainerZ: 1,
    }
    this.clickPhoto = this.clickPhoto.bind(this);
    this.clickX = this.clickX.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.clickFlag = this.clickFlag.bind(this);
  }
  clickPhoto(id) {
    this.setState({ showCarousel: true, carouselId: id - 1 });
  }
  clickX() {
    this.setState({ showCarousel: false });
  }
  clickLeft() {
    if (this.state.carouselId > 0) {
      this.setState({ carouselId: this.state.carouselId - 1 });
      console.log('current', this.state.carouselId);
    }
  }
  clickRight() {
    // TODO dynamic to pic count
    if (this.state.carouselId < 10) {
      this.setState({ carouselId: this.state.carouselId + 1 });
    }
  }
  clickFlag() {
    console.log('report', this.state.reportContainerZ);
    if (this.state.reportContainerZ === 1) {
      this.setState({ reportContainerZ: 11 });
    } else {
      this.setState({ reportContainerZ: 1 });
    }
  }

  render() {
    if (!this.state.showCarousel) {
      return (
        <div>
          <div>
            <SaveRestaurant />
          </div>
          <div className="photosHeader">
            <img className="photo photoA" key={this.props.photos[0].id} src={this.props.photos[0].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[0].id)} />
            <img className="photo photoB" key={this.props.photos[1].id} src={this.props.photos[1].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[1].id)} />
            <img className="photo photoC" key={this.props.photos[2].id} src={this.props.photos[2].url} style={{ width: 288, height: 288 }} onClick={() => this.clickPhoto(this.props.photos[2].id)} />
            <img className="photo photoD" key={this.props.photos[3].id} src={this.props.photos[3].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[3].id)} />
            <img className="photo photoE" key={this.props.photos[4].id} src={this.props.photos[4].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[4].id)} />
            <img className="photo photoF" key={this.props.photos[5].id} src={this.props.photos[5].url} style={{ width: 288, height: 288 }} onClick={() => this.clickPhoto(this.props.photos[5].id)} />
            <img className="photo photoG" key={this.props.photos[6].id} src={this.props.photos[6].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[6].id)} />
            <img className="photo photoH" key={this.props.photos[7].id} src={this.props.photos[7].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[7].id)} />
            <img className="photo photoI" key={this.props.photos[8].id} src={this.props.photos[8].url} style={{ width: 288, height: 288 }} onClick={() => this.clickPhoto(this.props.photos[8].id)} />
            <img className="photo photoJ" key={this.props.photos[9].id} src={this.props.photos[9].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[9].id)} />
            <img className="photo photoK" key={this.props.photos[10].id} src={this.props.photos[10].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[10].id)} />
            {/* <img className="photo photoL" key={this.props.photos[11].id} src={this.props.photos[11].url} style={{ width: 288, height: 142 }} onClick={() => this.this.clickPhoto(this.props.photos[11].id)} /> */}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <SaveRestaurant />
          </div>
          <div className="photosHeader">
            <img className="photo photoA" key={this.props.photos[0].id} src={this.props.photos[0].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[0].id)} />
            <img className="photo photoB" key={this.props.photos[1].id} src={this.props.photos[1].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[1].id)} />
            <img className="photo photoC" key={this.props.photos[2].id} src={this.props.photos[2].url} style={{ width: 288, height: 288 }} onClick={() => this.clickPhoto(this.props.photos[2].id)} />
            <img className="photo photoD" key={this.props.photos[3].id} src={this.props.photos[3].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[3].id)} />
            <img className="photo photoE" key={this.props.photos[4].id} src={this.props.photos[4].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[4].id)} />
            <img className="photo photoF" key={this.props.photos[5].id} src={this.props.photos[5].url} style={{ width: 288, height: 288 }} onClick={() => this.clickPhoto(this.props.photos[5].id)} />
            <img className="photo photoG" key={this.props.photos[6].id} src={this.props.photos[6].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[6].id)} />
            <img className="photo photoH" key={this.props.photos[7].id} src={this.props.photos[7].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[7].id)} />
            <img className="photo photoI" key={this.props.photos[8].id} src={this.props.photos[8].url} style={{ width: 288, height: 288 }} onClick={() => this.clickPhoto(this.props.photos[8].id)} />
            <img className="photo photoJ" key={this.props.photos[9].id} src={this.props.photos[9].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[9].id)} />
            <img className="photo photoK" key={this.props.photos[10].id} src={this.props.photos[10].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[10].id)} />
            {/* <img className="photo photoL" key={this.props.photos[11].id} src={this.props.photos[11].url} style={{ width: 288, height: 142 }} onClick={() => this.this.clickPhoto(this.props.photos[11].id)} /> */}
          </div>
          <div>
            <PhotoDimmer photos={this.props.photos} id={this.state.carouselId} clickX={this.clickX} />
          </div>
        </div>
      )
    }
  }
}

export default PhotoHeader;