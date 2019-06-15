import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import PhotoHeader from './components/PhotoHeader.jsx';
import PhotoGrid from './components/PhotoGrid.jsx';
import PhotoCarousel from './components/PhotoCarousel.jsx';
import SidebarInfo from './components/SidebarInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: window.location.pathname.split('/overviews/')[1].replace('/', ''),
      photos: [],
      info: [],
      isLoading: true,
    }
    console.log(this.state.id)
  }
  componentDidMount() {
    $.get({
      url: 'http://127.0.0.1:3060/API/photos/' + this.state.id,
      dataType: 'json',
      success: allPhotos => { 
        allPhotos = allPhotos.rows.map(i=> {
          i.url = 'https://s3-us-west-1.amazonaws.com/' + i.photo;
          i.timestamp = i.datePosted;
          return i;
        });
        this.setState({ photos:allPhotos , isLoading: false }) 
      },
      error: err => { console.log('Failed..', err) },
    });
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <PhotoHeader photos={this.state.photos} id={this.state.id} />
          <PhotoGrid photos={this.state.photos} />
          <SidebarInfo info={this.state.info} id={this.state.id} />
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('photos'));

export default App;