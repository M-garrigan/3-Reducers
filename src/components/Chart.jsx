import React from 'react';
import * as d3 from 'd3';
import {withFauxDOM} from 'react-faux-dom';
import '../styles/Chart.css';

class Chart extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
     
  //   }
  // }

  componentDidMount () {
    const faux = this.props.connectFauxDOM('div', 'chart');

    d3.select(faux)
      .append('div')
      .html('hello world!')
    this.props.animateFauxDOM(800);
  }

  render() {
    return (
      <div className='chart_wrapper'>
        <div className="renderedD3">
          {this.props.chart}
        </div>
      </div>
    );
  }
}

Chart.defaultProps = {
  chart: 'loading'
}

export default withFauxDOM(Chart);