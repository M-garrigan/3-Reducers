
import React from 'react';
import '../../styles/PopConfig.css'

export default class PopConfig extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.isPopConfigOpen) {
      return (
        <div className="popConfig_wrapper">
        
        </div>
      )
    } else {
      return (
        <div className="popConfig_closed_wrapper">
        
        </div>
      )
    }
    
  }
}