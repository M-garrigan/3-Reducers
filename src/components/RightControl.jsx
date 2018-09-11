import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/RightControl.css';


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
              size='5x'
              icon={faChevronRight}
            />
          </span>
      </div>

        <div className="right_control_box">

          <div className="right_control_header">
            Sort By:
            <select 
              onChange={e => {this.props.handleSortBy(e)}}
              className="right_select_main"
            >
            { mainMapped }
            </select>
          </div>

          <div className="right_control_header">
            Catagories:
            <select 
              onChange={e => {this.props.handleCategories(e)}}
              className="right_select_main"
            >
            { ['All', 'Top 10', 'Top 5', 'none'].map((item,index) => {
                return (
                  <option 
                    key={index} 
                    value={item}
                    className="right_options_main"
                  >{item}</option>
                )
              })}
            </select>
          </div>

          <div className="right_control_header">
            Compare States:
            <select 
              onChange={e => {this.props.handleStates(e)}}
              className="right_select_main"
            >
            { this.props.stateNames.map((item,index) => {
                return (
                  <option 
                    key={index} 
                    value={item}
                    className="right_options_main"
                  >{item}</option>
                )
              }) }
            </select>
          </div>

          {
            this.props.statesSelected.map( (state, index) => {
              return (
                <button 
                  className="selected_state_button"
                  key={index}
                  value={state}
                  onClick={e => {this.props.removeSelectedState(e)}}
                >{state}</button>
              )
            })
          }

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
              size='5x'
              icon={faChevronLeft}
            />
          </span>
        </div>
      )}
  }
}

export default RightControl;