import React from 'react';
import ReportPhotoMenu from './ReportPhotoMenu.jsx';

class PhotoDimmer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselId: null,
      reportContainerZ: 1,
      carouselId: this.props.id,
    }
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.clickFlag = this.clickFlag.bind(this);
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
    return (
      <div>
        <div className="photoDimmer">
          <img className="overlayPic" src={this.props.photos[this.state.carouselId].url} />
          <button className="overlayExitBtn" onClick={() => this.props.clickX()}>
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
              <div>{this.props.photos[this.props.id].timestamp}</div>
            </div>
          </div>
        </div>
        <ReportPhotoMenu style={{ zIndex: this.state.reportContainerZ }} clickFlag={() => this.clickFlag()} />
      </div>
    );
  }
}

export default PhotoDimmer;