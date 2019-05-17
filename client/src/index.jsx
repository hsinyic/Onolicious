import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PhotoHeader from './components/PhotoHeader.jsx';
import PhotoCarousel from './components/PhotoCarousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      isLoading: true,
    }
  }
  componentDidMount() {
    $.get({
      url: 'http://localhost:3050/photos/',
      dataType: 'json',
      success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
      error: err => { console.log('Failed..', err) },
    });
  }
  render() {
    return (
      <div onClick={() => console.log(this.state.photos)}>
        <PhotoHeader />
        <PhotoCarousel />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));