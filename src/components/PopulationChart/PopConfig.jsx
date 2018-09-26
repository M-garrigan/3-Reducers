
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './PopConfig.css';

export default class PopConfig extends React.Component {
  state = {
    isConfigOpen: true
  };

  toggleConfigPanel = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      isConfigOpen: !prevState.isConfigOpen
    }));
  }

  render() {

    if (this.state.isConfigOpen) {
      return (
        <div className="config-open">
          <FontAwesomeIcon
            className='icon'
            onClick={e => this.toggleConfigPanel(e)}
            color='rgb(70, 66, 68)'
            size='2x'
            icon={faArrowAltCircleRight}
          />

          <div className="pop-control-box">
            <div className="pop-sort">Chart Builder:</div>

            <select 
              onChange={e => {this.props.handleSortBy(e)}}
              className="pop-sort-select"
              value={this.props.config.sortBy}
            >
              { 
                ['Population', 'Density'].map( category => {
                  return (
                    <option 
                      key={category} 
                      value={category}
                      className="pop-category"
                    >{category}</option>
                  )
                })
              }
            </select>

            <select 
              onChange={e => {this.props.handleAutoGrouping(e)}}
              className="pop-autoGroup-select"
              value={this.props.data.autoGroup}
            >
              { 
                ['Top 10', 'Top 5', 'Top 5/Bottom 5', 'Bottom 5', 'Bottom 10', 'All'].map( group => {
                  return (
                    <option 
                      key={group} 
                      value={group}
                      className="pop-category"
                    >{group}</option>
                  )
                })
              }
            </select>

            <div className="pop-indiv-state">or Compare Mulitple States:</div>

            <select 
              onChange={e => {this.props.handleStatesSelection(e)}}
              className="pop-states-select"
              value={this.props.config.currentState}
            >
              { this.props.statesArray.map( state => {
                  return (
                    <option 
                      key={state} 
                      value={state}
                      className="pop-state"
                    >{state}</option>
                  )
                }) 
              }
            </select>

            {
              this.props.data.statesGroup.map( (state, idx) => {
                return (
                  <button className="state-group-button" key={state}>
                    {state}
                    <FontAwesomeIcon
                      onClick={e => this.props.removeStateFromGroup(e, idx)}
                      className="remove-state"
                      color='rgb(70, 66, 68)'
                      size='1x'
                      icon={faTimesCircle}
                    />
                  </button>
                )
              })
            }

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
        <div className="config-closed">
          <FontAwesomeIcon
            className='icon'
            onClick={e => this.toggleConfigPanel(e)}
            color='rgb(70, 66, 68)'
            size='2x'
            icon={faArrowAltCircleLeft}
          />
        </div>
      )
    }
    
  }
}