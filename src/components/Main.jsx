
import React from 'react';

import MainChart from './MainChart.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDonate, faIndustry } from '@fortawesome/free-solid-svg-icons';
import '../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      statesArray: [],
      left: null,
      right_SortBy: 'Population',
      right_Compare: [],
      db_Data: [],
      chart: 'bar'
    }
    this.handleSortBy = this.handleSortBy.bind(this);
    this.handleStates = this.handleStates.bind(this);
  }

  handleSortBy (e) {
    e.preventDefault();
    this.setState({
      right_SortBy: e.target.value
    });
  }

  handleStates (e) {
    e.preventDefault();
    this.setState({
      statesArray: e.target.value
    });
  }

  render() {
    return (
      this.props.dataSet === 'none' 
        ? (
          <div className="select_a_category">
            <h2 className="select_a_category_header">
              Visualizing Census.gov Data
            </h2>
            <div className="data_category_wrapper">
              <div 
                className="pop_category data_category"
                value='Population'
                onClick={e => this.props.handleDataSetChange(e)}
              >
                <div className="data_category_title">
                  Population
                </div>
                <span className="icon_span">
                  <FontAwesomeIcon
                    className='icon'
                    color='rgb(70, 66, 68)'
                    size='10x'
                    icon={faUsers}
                  />
               </span>
              </div>

              <div 
                className="econ_category data_category"
                value='Economy'
                onClick={e => this.props.handleDataSetChange(e)}
              >
                <div className="data_category_title">
                  Economy
                </div>
                <span className="icon_span">
                  <FontAwesomeIcon
                    className='icon'
                    color='rgb(70, 66, 68)'
                    size='10x'
                    icon={faDonate}
                  />
               </span>
              </div>

              <div 
                className="manuf_category data_category"
                value='Manufacturing'
                onClick={e => this.props.handleDataSetChange(e)}
              >
                <div className="data_category_title">
                  Manufacturing
                </div>
                <span className="icon_span">
                  <FontAwesomeIcon
                    className='icon'
                    color='rgb(70, 66, 68)'
                    size='10x'
                    icon={faIndustry}
                  />
               </span>
              </div>
            </div>
          </div>
        )
        : 
        ( 
          <MainChart 
            dataSet={this.props.dataSet}
          /> 
        )
    )}
}

export default Main;