import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/RightControl.css';

//import {mainMapped} from '../componentHelpers/rightControl.js';

class RightControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panelOpen: true
    }
    this.togglePanelOpen = this.togglePanelOpen.bind(this);
  }

  togglePanelOpen (e) {
    e.preventDefault();
    this.setState( prevState => ({
      panelOpen: !prevState.panelOpen
    }))
  }

  render() {

    const main = ['Population', 'Density', 'Growth', 'Area'];
    const mainMapped = main.map( (item,index) => {
      return (
        <option 
          key={index} 
          value={item}
          className="right_options_main"
        >{item}</option>
      )
    });

    if (this.state.panelOpen) {
    return (
      <div className='right_control_wrapper'>
         <div className="right_open_panel_wrapper">
          <span  
            className="icon_wrapper"
            onClick={e => {this.togglePanelOpen(e)}}
          >
            <FontAwesomeIcon
              className='icon'
              color='grey'
              size='8x'
              icon={faChevronRight}
            />
          </span>
      </div>

        <div className="right_control_box">

          <div className="right_control_header">
              Sort By:
          </div>

          <select 
            onChange={e => {this.props.handleSortBy(e)}}
            className="right_select_main"
          >
          { mainMapped }
          </select>

          <div className="right_control_header">
              Compare:
          </div>

          <select 
            onChange={e => {this.props.handleSortBy(e)}}
            className="right_select_main"
          >
          { mainMapped }
          </select>

          <select 
            onChange={e => {this.props.handleSortBy(e)}}
            className="right_select_main"
          >
          { mainMapped }
          </select>

          <div className="right_control_header">
            Add Another State
          </div>

          <button
            className="create_chart_button"
            onClick={e => this.props.createChart(e)}
          >Create</button>
        </div>
      </div>
    )}
    else {
      return (
        <div className="right_closed_panel_wrapper">
          <span  
            className="icon_wrapper"
            onClick={e => {this.togglePanelOpen(e)}}
          >
            <FontAwesomeIcon
              className='icon'
              color='grey'
              size='8x'
              icon={faChevronLeft}
            />
          </span>
        </div>
      )}
  }
}

export default RightControl;

// call db for list of states & build array of dom elems
// let listOfStatesToDOM = () => {
//   console.log('in listOFStates')
//   let list = findAllStates( (err, results) => {
//     if (err) console.log(err);
//     else console.log(results);
//   });
//   console.log('allStates: ', list);

// };