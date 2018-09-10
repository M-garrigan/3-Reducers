import React from 'react';

import DefaultSVG from './charts/DefaultSVG/DefaultSVG.jsx';

export default class SVG extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      SVG_Height: null,
      SVG_Width: null
    }
    this.parentRef = React.createRef();
  }
  componentDidMount() {
    const node = this.parentRef.current;
    this.setState({
      SVG_Height: this.parentRef.current.clientHeight,
      SVG_Width: this.parentRef.current.clientWidth
    });
    console.log(node.clientWidth);
    console.log(node.clientHeight);
  }


  render() {
    
    return (
      <svg width="100%" height="100%" ref={this.parentRef}>
        <DefaultSVG
          parentHeight={this.state.SVG_Height}
          parentWidth={this.state.SVG_Width}
        />
      </svg>
    )
  }
}