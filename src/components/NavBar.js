
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGamepad } from '@fortawesome/free-solid-svg-icons';
import '../styles/NavBar.css';

export default ({category, setCategory}) => {

  return (
    <div className='nav-wrapper'>

      <h2 className="nav-logo">
        Watch-Me
      </h2>

      <div className="nav-icon-group">

        <div 
          className={
            category === 'Streamers'
              ? "nav-icon-wrap-focused"
              : "nav-icon-wrap"
          }
          onClick={() => setCategory('Streamers')}
        >
          <p>Streamers</p>
          <span className="icon-span">
            <FontAwesomeIcon
              size='4x'
              icon={faUsers}
            />
          </span>
        </div>

        <div 
          className={
            category === 'Games'
              ? "nav-icon-wrap-focused"
              : "nav-icon-wrap"
          }
          onClick={() => setCategory('Games')}
        >
          <p>Games</p>
          <span className="icon-span">
            <FontAwesomeIcon
              size='4x'
              icon={faGamepad}
            />
          </span>
        </div>

      </div>
    </div>
  )
}