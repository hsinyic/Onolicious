import React from 'react';

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  onClick() {
    // console.log(this.props.photos);
  }
  render() {
    return (
      <div className="photo-grid-container" onClick={() => console.log(this.props.photos)}>
        <div className="photo-grid-left">
          <img className="photo-grid-list-img" src={this.props.photos[0].url} />
          <img className="photo-grid-list-img-center" src={this.props.photos[1].url} />
          <img className="photo-grid-list-img" src={this.props.photos[2].url} />
        </div>
        <div className="photo-grid-right">
          <img className="photo-grid-list-img" src={this.props.photos[3].url} />
          <img className="photo-grid-list-img" src={this.props.photos[4].url} />
          <img className="photo-grid-list-img" src={this.props.photos[5].url} />
          <img className="photo-grid-list-img" src={this.props.photos[6].url} />
          <img className="photo-grid-list-img" src={this.props.photos[7].url} />
          <img className="photo-grid-list-img" src={this.props.photos[8].url} />
        </div>
      </div>
    );
  }
}

export default PhotoGrid;

// {
//   this.props.photos.map(photo => {
//     if (photo.id > 3 && photo.id < 10) {
//       (
//         <div>
//           <img className="photo-grid-list-img" src={photo.url} />
//         </div>
//       )
//     }
//   }
//   )
// }

{/* <img className="photo photo-A" key={this.props.photos[0].id} src={this.props.photos[0].url} style={{ width: 142, height: 142 }} onClick={() => this.clickPhoto(this.props.photos[0].id)} /> */ }