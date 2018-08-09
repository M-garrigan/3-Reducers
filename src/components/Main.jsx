
import React from 'react';

import MainChart from './MainChart.jsx';
import PopulationChart from './PopulationChart/PopulationChart.jsx';
import EconomyChart from './EconomyChart/EconomyChart.jsx';
import ManufacturingChart from './ManufacturingChart/ManufacturingChart.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDonate, faIndustry } from '@fortawesome/free-solid-svg-icons';

import '../styles/Main.css';

export default class Main extends React.Component {
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
    
  }

  render() {
    
    if (this.props.dataSet === 'Population') {
      return (<PopulationChart />)
    }
    else if (this.props.dataSet === 'Economy') {
      return (<EconomyChart />)
    }
    else if (this.props.dataSet === 'Manufacturing') {
      return (<ManufacturingChart />)
    } else {
        return (
          <div className="select_a_category">

            <h2 className="select_a_category_header">
              Visualizing Census.gov Data
            </h2>

            <div className="data_category_wrapper">
              <div 
                className="pop_category data_category"
                value='Population'
                onClick={e => this.props.handleDataSetChange(e, 'Population')}
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
                onClick={e => this.props.handleDataSetChange(e, 'Economy')}
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
                onClick={e => this.props.handleDataSetChange(e, 'Manufacturing')}
              >
                <div className="manuf_category_title">
                  Manufacturing
                </div>
                <span className="icon_span" value='Manufacturing'>
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
          }
        }
}

