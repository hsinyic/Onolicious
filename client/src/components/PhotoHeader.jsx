import React from 'react';
import $ from 'jquery';


class PhotoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: false,
      photos: [],
    }
    // this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    // let allPhotos = [];
    // $.get({
    //   url: 'http://localhost:3050/photos/',
    //   dataType: 'json',
    //   success: data => console.log(data),
    //   error: err => { console.log('Failed..', err) },
    // });

    // console.log('state.allPhotos', this.state);
    // this.setState({
    //   isLoading: false,
    //   photos: allPhotos,
    // });
  }

  render() {
    return (
      <div>
        Photo Header
      </div>
    )
  }
}

export default PhotoHeader;