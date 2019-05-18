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
    console.log(this.props.photos[9]);
  }

  render() {
    return (
      <div className="photosHeader" onClick={() => this.handleClick()}>
        <img className="photo photoA" key={this.props.photos[0].id} src={this.props.photos[0].url} style={{ width: 142, height: 142 }} />
        <img className="photo photoB" key={this.props.photos[1].id} src={this.props.photos[1].url} style={{ width: 142, height: 142 }} />
        <img className="photo photoC" key={this.props.photos[3].id} src={this.props.photos[3].url} style={{ width: 288, height: 288 }} />
        <img className="photo photoD" key={this.props.photos[4].id} src={this.props.photos[4].url} style={{ width: 142, height: 142 }} />
        <img className="photo photoE" key={this.props.photos[5].id} src={this.props.photos[5].url} style={{ width: 142, height: 142 }} />
        <img className="photo photoF" key={this.props.photos[6].id} src={this.props.photos[6].url} style={{ width: 288, height: 288 }} />
        <img className="photo photoG" key={this.props.photos[7].id} src={this.props.photos[7].url} style={{ width: 142, height: 142 }} />
        <img className="photo photoH" key={this.props.photos[8].id} src={this.props.photos[8].url} style={{ width: 142, height: 142 }} />
        <img className="photo photoI" key={this.props.photos[9].id} src={this.props.photos[9].url} style={{ width: 288, height: 288 }} />
        <img className="photo photoJ" key={this.props.photos[10].id} src={this.props.photos[10].url} style={{ width: 142, height: 142 }} />
        <img className="photo photoK" key={this.props.photos[11].id} src={this.props.photos[11].url} style={{ width: 142, height: 142 }} />
      </div>
    )
  }
}

export default PhotoHeader;