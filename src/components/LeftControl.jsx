import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/LeftControl.css';

export default class LeftControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panelOpen: false,
      title: '',
      fontSize: '16px'
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
    const colorThemes = ['VSON', 'Modern', 'Beach', 'Bright', 'Primary'];
    const colorThemeOptionElements = 
      colorThemes.map( (theme, index) => 
        <option key={index} value={theme}>{theme}</option>
      );

    const backgroundTextures = ['Squares', 'Paper', 'Diamonds', 'Brick', 'None'];
    const backgroundTextureOptionElements = 
      backgroundTextures.map( (texture, index) => 
        <option key={index} value={texture}>{texture}</option>
      );
    
    if (this.state.panelOpen) {
      return (
      <div className='left_control_wrapper'>
        <div className="left_control_box">

          {/* COLOR THEME */}
          <div className="color_theme_wrapper option">
            <p className='color_theme_text text'>
              Color Themes
            </p>
            <select className='color_theme_select'>
              { colorThemeOptionElements } 
            </select>
          </div>

          {/* TITLE OPTIONS */}
          <div className="title_wrapper option">
            <p className='title_text text'>
              Chart Header
            </p>
            <label htmlFor="title">Title</label>
            <br/>
            <input 
              id='title'
              value={this.props.input_title} 
              onChange={e => this.props.handleCustomTitle(e)}
              type='text'
            />
            <br/>
             <label htmlFor="font_size">Size</label>
             <br/>
            <input 
              id='font_size'
              value={this.state.font_size} 
              type='text'
            />
          </div>

          {/* BACKGROUND OPTIONS */}
          <div className="background_wrapper option">
            <p className='background_text text'>
              Background Texture
            </p>
            <select 
              onChange={e => this.props.handleBackgroundTextures(e)}
              className='background_texture_select'>
              { backgroundTextureOptionElements } 
            </select>
          </div>
        </div>

        <div className="left_open_panel_wrapper">
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
        <div className="sideways_text">STYLES</div>
      </div>
       
    </div>
    )}
    else{ 
      return (
      <div className="left_closed_panel_wrapper">
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
        <div className="sideways_text">STYLES</div>
      </div>
    )}
  }
}