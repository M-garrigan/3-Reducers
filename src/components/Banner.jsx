
import React from 'react';
import '../styles/Banner.css';

class Banner extends React.Component {
  
  state = {}
  

  seedInitData = (e) => {
    e.preventDefault();
    axios.get('/seed')
      .catch( err => console.log(err))
  }

  render() {
    
    if (this.props.dataSet === 'none') {
      return (
        <div className='banner_wrapper'>
          <h2 className="banner_logo">VSON</h2>
        </div>
      )
    } else {
      return (
        <div className='banner_wrapper'>
          <h2 className="banner_logo" onClick={(e) => resetStateToRenderHome(e)}>VSON</h2>
          <h3 className="dataType_logo">            
            {this.props.dataSet}
          </h3>
        </div>
      )
    }
  }
}

export default Banner;
