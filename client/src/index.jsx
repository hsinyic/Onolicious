import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { placeholder } from '@babel/types';

import PhotoHeader from './components/PhotoHeader.jsx';
import PhotoCarousel from './components/PhotoCarousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <PhotoHeader />
        <PhotoCarousel />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));