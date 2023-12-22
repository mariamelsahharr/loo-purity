import React, { Component, Fragment } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNav: 1,
      selectedList: this.props.a1
    }
  }

render() {
    return (
      <div className='card shadow-sm result'>
        <div className='card-body'>
          <div className='row text-center'>
            <div className='col'>
              <h2>{100 - this.props.score }</h2>
              <h6 className='text-muted mb-0'>Your Purity Score</h6>
            </div>
          </div>
  
          {/* <ActList acts={this.state.selectedList} /> */}
        </div>
      </div>
    );
  }
}
export default Result;