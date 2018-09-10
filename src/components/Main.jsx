
import React from 'react';
import axios from 'axios';
import Banner from './Banner.jsx';
import MainView from './MainView.jsx';
import '../styles/Main.css';
import {format_pop_data} from '../../helpers/chartBuilder/formatPopData.js';

import {format_dens_data} from '../../helpers/chartBuilder/formatDensData.js';

import {truncateData, truncateData2Items} from '../../helpers/chartBuilder/truncateData.js';
import FileSaver from 'file-saver';
//console.log(saveAs);


export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    chart: 'bar',
    categories: 'All',
    sortBy: 'Population',
    dataForChart: [],
    stateNames: [],
    statesSelected: [],
    config: null,
    custom_title: '',
    input_title: '',
    backgroundTextures: ''
    }
    this.handleChart = this.handleChart.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
    this.handleStates = this.handleStates.bind(this);
    this.removeSelectedState = this.removeSelectedState.bind(this);
    this.createChart = this.createChart.bind(this);
    this.buildConfig = this.buildConfig.bind(this);
    this.seeDB = this.seeDB.bind(this);
    this.handleCustomTitle = this.handleCustomTitle.bind(this);
    this.handleBackgroundTextures = this.handleBackgroundTextures.bind(this);
  }

  handleBackgroundTextures(e) {
    e.preventDefault();
    this.setState({backgroundTextures: e.target.value})
  }

  handleCustomTitle(e) {
    e.preventDefault();
    this.setState({input_title: e.target.value})
    this.setState({custom_title: e.target.value})
  }

  seeDB (e) {
    e.preventDefault();
    // axios.get('/retrieveNames')
    //   .then(response => this.setState({stateNames: response.data}))
    //   .catch(err => console.log('axios-client',err));
  }

  handleChart (e) {
    e.preventDefault();
    console.log('target',e.target.innerHTML)
    let temp = e.target.innerHTML.toLowerCase();
    this.setState({chart: temp})
  }

  handleCategories (e) {
    e.preventDefault();
    this.setState({
      categories: e.target.value
    });
  }

  handleSortBy (e) {
    e.preventDefault();
    this.setState({
      sortBy: e.target.value
    });
  }

  handleStates (e) {
    e.preventDefault();
    // add each state chosen into array
    let temp = this.state.statesSelected.slice();
    temp.push(e.target.value);
    this.setState({
      statesSelected: temp
    });
  }

  removeSelectedState (e) {
    e.preventDefault();

    let temp = this.state.statesSelected.slice();
    for (let i = 0; i < temp.length; i += 1) {
      if (e.target.value === temp[i]) {
        temp.splice(i, 1);
        break;
      }
    }
    this.setState({
      statesSelected: temp
    });
  }

  buildConfig (data, callback) {
    let newConfig = {
      chart: this.state.chart,
      sortBy: this.state.sortBy,
      categories: this.state.categories,
      statesSelected: this.state.statesSelected,
      data: data
    }
    callback(newConfig);
  }

  createChart (e) {
    e.preventDefault();
  
    if (this.state.sortBy === 'Population' && (this.state.chart === 'line' || this.state.chart === 'area')) {
      axios.get('/populationRange')
        .then(response => {
          this.buildConfig(response.data, config => {
            format_pop_data(config, (results) => {
              truncateData2Items(results, config, (results) => {
                this.buildConfig(results,  newConfig => {
                  this.setState({config: newConfig})
                });
              });
            });
          });
        })
        .catch(err => console.log(err));
    }
    else if (this.state.sortBy === 'Population') {
      axios.get('/population')
        .then(response => {
          this.buildConfig(response.data, config => {
            format_pop_data(config, (results) => {
              truncateData(results, config, (results) => {
                this.buildConfig(results,  newConfig => {
                  this.setState({config: newConfig});
                });
              });
            });
          });
        })
        .catch(err => console.log(err));
    }
    else if (this.state.sortBy === 'Density' && (this.state.chart === 'line' || this.state.chart === 'area')) {
      axios.get('/densityRange')
        .then(response => {
          this.buildConfig(response.data, config => {
            format_dens_data(config, (results) => {
              truncateData2Items(results, config, (results) => {
                this.buildConfig(results,  newConfig => {
                  this.setState({config: newConfig})
                });
              });
            });
          });
        })
        .catch(err => console.log(err));
    }
    else if (this.state.sortBy === 'Density') {
      axios.get('/density')
        .then(response => {
          this.buildConfig(response.data, config => {
            format_dens_data(config, (results) => {
              truncateData(results, config, (results) => {
                this.buildConfig(results,  newConfig => {
                  this.setState({config: newConfig});
                });
              });
            });
          });
        })
        .catch(err => console.log(err));
      }
    }
      // else if (this.state.sortBy === 'Population' && this.state.chart === 'pie') {
      //   format_pop_pie(response.data, (results) => {
      //     truncateData(results, this.state.categories, (results) => {
      //       this.buildConfig(results,  newConfig => {
      //         this.setState({config: newConfig})
      //       });
      //     });
      //   });
      // }
      // else if (this.state.sortBy === 'Population' && this.state.chart === 'scatter') {
      //   format_pop_scatter(response.data, (results) => {
      //     truncateData(results, this.state.categories, (results) => {
      //       this.buildConfig(results,  newConfig => {
      //         this.setState({config: newConfig})
      //       });
      //     });
      //   });
      // }
      // else if (this.state.sortBy === 'Population' && this.state.chart === 'bubble') {
      //   format_pop_bubble(response.data, (results) => {
      //     truncateData(results, this.state.categories, (results) => {
      //       this.buildConfig(results,  newConfig => {
      //         this.setState({config: newConfig})
      //       });
      //     });
      //   });
      // }
      // else if (this.state.sortBy === 'Population' && this.state.chart === 'line') {
      //   axios.get('/populationRange')
      //     .then(resp => {
      //       format_pop_line_or_area(resp.data, (results) => {
      //         truncateData2Items(results, this.state.categories, (results) => {
                
      //           this.buildConfig(results,  newConfig => {
      //             this.setState({config: newConfig})
      //           });
      //         });
      //       })
      //   })
      //   .catch(err => console.log(err));
      // }
    //   else if (this.state.sortBy === 'Population' && this.state.chart === 'area') {
    //     axios.get('/populationRange')
    //       .then(resp => {
    //         format_pop_line_or_area(resp.data, (results) => {
    //           truncateData2Items(results, this.state.categories, (results) => {
                
    //             this.buildConfig(results,  newConfig => {
    //               this.setState({config: newConfig})
    //             });
    //           });
    //         })
    //     })
    //     .catch(err => console.log(err));
    //   }
     
    
  

  componentDidMount() {
    axios.get('/retrieveNames')
      .then(response => this.setState({stateNames: response.data}))
      .catch(err => console.log('axios-client',err));
  }

  render() {
    return (
      <div className='main_wrapper'>
        <Banner 
          chart={this.state.chart}
          handleChart={this.handleChart}
          // handleDownload={this.handleDownload}
        />
        <MainView 
          handleCategories={this.handleCategories}
          handleSortBy={this.handleSortBy}
          handleStates={this.handleStates}
          removeSelectedState={this.removeSelectedState}
          createChart={this.createChart}
          stateNames={this.state.stateNames}
          statesSelected={this.state.statesSelected}
          config={this.state.config}
          seeDB={this.seeDB}
          custom_title={this.state.custom_title}
          input_title={this.state.input_title}
          handleCustomTitle={this.handleCustomTitle}
          handleBackgroundTextures={this.handleBackgroundTextures}
          backgroundTextures={this.state.backgroundTextures}
        />
      </div>
    )
  }
};