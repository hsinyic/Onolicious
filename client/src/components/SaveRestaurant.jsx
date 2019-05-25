import React from 'react';

class SaveRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveRestaurant: false,
    }
    this.clickSave = this.clickSave.bind(this);
  }
  clickSave() {
    if (this.state.saveRestaurant) {
      this.setState({ saveRestaurant: false })
    } else if (!this.state.saveRestaurant) {
      this.setState({ saveRestaurant: true })
    }
  }
  render() {
    if (!this.state.saveRestaurant) {
      return (
        <div className="save-restaurant-container" onClick={() => this.clickSave()}>
          <button className="save-restaurant-btn">
            <div className="save-restaurant-text-container">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g id="icon/ic_bookmark" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M7,2.99987873 L17,2.99987873 C18.1045695,2.99987873 19,3.89530923 19,4.99987873 L19,20.6055572 C19,20.8816996 18.7761424,21.1055572 18.5,21.1055572 C18.421402,21.1055572 18.343911,21.0870278 18.273815,21.0514724 L12,17.8691561 L5.72618504,21.0514724 C5.4799129,21.1763909 5.17900339,21.0780144 5.05408484,20.8317423 C5.01852946,20.7616462 5,20.6841552 5,20.6055572 L5,4.99987873 C5,3.89530923 5.8954305,2.99987873 7,2.99987873 Z M7,5 L7,18.3374734 L12,15.7665154 L17,18.3374734 L17,5 L7,5 Z" id="Combined-Shape" fill="#333333"></path></g></svg>
              <span className="save-restaurant-text">Save this restaurant</span>
            </div>
          </button>
        </div>
      );
    } else {
      return (
        <div className="save-restaurant-container" onClick={() => this.clickSave()}>
          <button className="save-restaurant-btn">
            <div className="save-restaurant-text-container">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g id="icon/ic_bookmarked" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="icon/ic_bookmark" transform="translate(5.000000, 3.000000)" fill="#DA3743"><path d="M2,-0.000121269196 L12,-0.000121269196 C13.1045695,-0.000121269196 14,0.895309231 14,1.99987873 L14,17.6055572 C14,17.8816996 13.7761424,18.1055572 13.5,18.1055572 C13.421402,18.1055572 13.343911,18.0870278 13.273815,18.0514724 L7,14.8691561 L0.726185039,18.0514724 C0.479912898,18.1763909 0.17900339,18.0780144 0.054084842,17.8317423 C0.0185294562,17.7616462 2.78518304e-15,17.6841552 2.77555756e-15,17.6055572 L0,1.99987873 C-6.25798147e-16,0.895309231 0.8954305,-0.000121269196 2,-0.000121269196 Z" id="Combined-Shape"></path></g></g></svg>
              <span className="save-restaurant-text">Restaurant saved!</span>
            </div>
          </button>
        </div>
      );
    }
  }
}

export default SaveRestaurant;