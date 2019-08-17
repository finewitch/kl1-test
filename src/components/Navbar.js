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
              {this.menuLinks.map( ( el )=>{
                return  (
                <li>
                  <NavLink link={ el.link } name={ el.name } num={ el.num }/>
                </li>
                )
              } )}
              {/* <li>
                <a href="#needtofillhere">
                <span>01</span>
                  Home</a>
              </li>
              <li>
                <a href="#needtofillhere">
                <span>02</span>
                  About
                </a>
                </li>
                <li>
                <a href="#needtofillhere">
                  <span>03</span>
                  Team
                  </a>
              </li>
              <li>
                <a href="#needtofillhere">
                <span>04</span>
                  Publications
                </a>
                /
                <a href="#needtofillhere">
                <span>04.1</span>
                  Resources
                </a>
                
              </li>
              <li>
                <a href="#needtofillhere">
                <span>05</span>
                  Contact us & News
                  </a>
              </li> */}
            </ul>

          </nav>
        </div>
      )
    }
}