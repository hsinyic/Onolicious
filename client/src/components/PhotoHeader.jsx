import React from 'react';

class PhotoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(photo) {
    console.log('photo clicked');
  }

  render() {
    return (
      <div className="photosContainer" onClick={() => this.handleClick()}>
        <img className="photos column" key={this.props.photos[0].id} src={this.props.photos[0].url} style={{ width: 142, height: 142 }} />
        <img className="photos column" key={this.props.photos[1].id} src={this.props.photos[1].url} style={{ width: 142, height: 142 }} />
        <img className="photos standalone" key={this.props.photos[3].id} src={this.props.photos[3].url} style={{ width: 288, height: 288 }} />
        <img className="photos column" key={this.props.photos[4].id} src={this.props.photos[4].url} style={{ width: 142, height: 142 }} />
        <img className="photos column" key={this.props.photos[5].id} src={this.props.photos[5].url} style={{ width: 142, height: 142 }} />
        <img className="photos standalone" key={this.props.photos[6].id} src={this.props.photos[6].url} style={{ width: 288, height: 288 }} />
        <img className="photos column" key={this.props.photos[7].id} src={this.props.photos[7].url} style={{ width: 142, height: 142 }} />
        <img className="photos column" key={this.props.photos[8].id} src={this.props.photos[8].url} style={{ width: 142, height: 142 }} />
      </div>
    )
  }
}

export default PhotoHeader;