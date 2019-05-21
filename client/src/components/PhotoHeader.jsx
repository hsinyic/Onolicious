import React from 'react';
import ReportPhotoMenu from './ReportPhotoMenu.jsx';

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
      )
    } else {
      return (
        <div>
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
          <div className="photoDimmer">
            <img className="overlayPic" src={this.props.photos[this.state.carouselId].url} />
            <button className="overlayExitBtn" onClick={() => this.clickX()}>
              <ion-icon name="ios-close"></ion-icon>
            </button>
            <button className="overlayLeftBtn" onClick={() => this.clickLeft()}>
              <ion-icon name="arrow-dropleft"></ion-icon>
            </button>
            <button className="overlayRightBtn" onClick={() => this.clickRight()}>
              <ion-icon name="arrow-dropright"></ion-icon>
            </button>
            <svg className="flagPhoto" onClick={() => this.clickFlag()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="_24._Tiny_Flag_Icon" fill="#fff" data-name="24. Tiny Flag Icon" d="M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z" transform="translate(-464 -463)"></path></svg>
            <div className="openTableCircle">
              <svg height="50" width="50"><circle cx="25" cy="25" fill="#56D7D9" r="25"></circle><text dy=".3em" fill="white" textAnchor="middle" x="50%" y="50%">OT</text></svg>
              <div>
                <strong>OpenTable Diner</strong>
                <div>{this.props.photos[this.state.carouselId].timestamp}</div>
              </div>
            </div>
          </div>
          <ReportPhotoMenu style={{ zIndex: this.state.reportContainerZ }} clickFlag={() => this.clickFlag()} />
        </div >
      )
    }
  }
}

export default PhotoHeader;