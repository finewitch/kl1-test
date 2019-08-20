import React from 'react'
import NavLink from './atoms/NavLink'

export default class Navbar extends React.Component {
    constructor(props) {
      super(props);

      this.menuLinks = [
        {
          "name": "Home",
          "link": "/",
          "num" : "01"
        },
        {
          "name": "About",
          "link": "/#about",
          "num" : "02"
        },
        {
          "name": "Team",
          "link": "/#team",
          "num" : "03"
        },
        {
          "name": "Publications",
          "link": "/#publications",
          "num" : "04"
        },
        {
          "name": "Resources",
          "link": "/#publications",
          "num" : "05"
        },
        {
          "name": "Contact us & News",
          "link": "/#contact",
          "num" : "06"
        }
      ]
    }


    render(){
      return(
        <div className="menu">
          <nav className="menu__main">
          logo
            <ul className="menu__main-wrapper">

              {this.menuLinks.map( ( el, index )=>{
                return  (
                <li key={index}>
                  <NavLink link={ el.link } name={ el.name } num={ el.num } />
                </li>
                )
              } )}

            </ul>

          </nav>
        </div>
      )
    }
}