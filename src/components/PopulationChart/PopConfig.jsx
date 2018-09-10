
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import '../../styles/PopConfig.css'

export default class PopConfig extends React.Component {

  render() {

    const categories = ['Population', 'Density', 'Growth', 'Area'].map( category => {
      return (
        <option 
          key={Date.now() * Math.random()} 
          value={category}
          className="pop-category"
        >{category}</option>
      )
    });

    if (this.props.isPopConfigOpen) {
      return (
        <div className="popConfig_open_wrapper">
          <FontAwesomeIcon
            className='icon'
            onClick={e => this.props.toggleIsPopConfigOpen(e)}
            color='rgb(70, 66, 68)'
            size='4x'
            icon={faArrowAltCircleRight}
          />
          <div className="pop-control-box">

            <div className="pop-sort">Sort By:</div>

            <select 
              onChange={e => {this.props.handleSortBy(e)}}
              className="pop-sort-select"
              value={this.props.sortBy}
            >
              { categories }
            </select>

            <div className="pop-compare">Compare:</div>

            <select 
              onChange={e => {this.props.handleStatesSelection(e)}}
              className="pop-states-select"
              value={this.props.currentState}
            >
              { this.props.statesArray.map( state => {
                  return (
                    <option 
                      key={Date.now() * Math.random()} 
                      value={state}
                      className="pop-state"
                    >{state}</option>
                  )
                }) 
              }
            </select>

            <button
              className="pop-create-chart-button"
              onClick={e => this.props.buildChart(e)}
            >
              Create
            </button>

          </div>
        </div>
      )
    } else {
      return (
        <div className="popConfig_closed_wrapper">
          <FontAwesomeIcon
            className='icon'
            onClick={e => this.props.toggleIsPopConfigOpen(e)}
            color='rgb(70, 66, 68)'
            size='4x'
            icon={faArrowAltCircleLeft}
          />
        </div>
      )
    }
    
  }
}