/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
              <div className = "header--logo">
                  <a href= "/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt = "netflix"/>
                  </a> 
                  </div>
                  <div className="header--user">
                    <a href="/">
                        < img src= "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt = 'usario'/>
                    </a>
                  </div>
        </header>

    );

}