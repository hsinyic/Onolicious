import React from 'react';
import ReportPhotoMenu from './ReportPhotoMenu.jsx';
import moment from 'moment';

class PhotoDimmer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      console.log('current pic id', this.state.carouselId);
    }
  }
  clickRight() {
    // TODO dynamic to pic count
    if (this.state.carouselId < 10) {
      console.log('current pic id', this.state.carouselId);
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
      <div className="overlay-photoDimmer">
        <div className="overlay-container">
          <button className="overlay-left-btn" onClick={() => this.clickLeft()}>
            <svg fill="#91949a" viewBox="0 0 500 500"><path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z" /></svg>
          </button>
          <img className="overlay-pic" src={this.props.photos[this.state.carouselId].url} />
          <button className="overlay-right-btn" onClick={() => this.clickRight()}>
            <svg fill="#91949a" viewBox="0 0 500 500"><path xmlns="http://www.w3.org/2000/svg" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" /></svg>
          </button>
          <div className="overlay-timestamp">
            <svg height="50" width="50"><circle cx="25" cy="25" fill="#56D7D9" r="25"></circle><text dy=".3em" fill="white" textAnchor="middle" x="50%" y="50%">OT</text></svg>
            <div className="overlay-timestamp-text">
              <strong>OpenTable Diner</strong>
              <div>Dined on {moment(this.props.photos[this.state.carouselId].timestamp).format('MMMM Do YYYY')}</div>
            </div>
          </div>
          <svg className="overlay-flag-photo" onClick={() => this.clickFlag()} width="24" height="24" viewBox="0 0 24 24"><path id="_24._Tiny_Flag_Icon" fill="#fff" data-name="24. Tiny Flag Icon" d="M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z" transform="translate(-464 -463)"></path></svg>
        </div>
        <button className="overlay-exit-btn" onClick={() => this.props.clickX()}>
          <svg className="overlay-exit-svg" content="ios" fill="#91949a" width="24px" height="24px" viewBox="0 0 650 650"><g><path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z" /></g></svg>
        </button>
        <ReportPhotoMenu style={{ zIndex: this.state.reportContainerZ }} clickFlag={() => this.clickFlag()} />
      </div>
    );
  }
}

export default PhotoDimmer;