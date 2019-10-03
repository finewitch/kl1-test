import React from 'react';
import NavLink from './atoms/NavLink';
import logo from '../img/logo-cspace.png';
import { Link } from 'gatsby';

export default class Navbar extends React.Component {
    constructor(props) {
      super(props);
      const substring = 'resources'
      this.separatepage = false;

      if(window.location.pathname.includes(substring)){
        this.separatepage = true;
      }else{
        this.separatepage = false;
      }

      this.menuLinks = [
        {
          "name": "About",
          "link": "/#about",
          "num" : "02"
        },
        {
          "name": "News",
          "link": "/#news",
          "num" : "03"
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
          "link": "/resources/resources-2/",
          "num" : "05"
        },
        {
          "name": "Contact us",
          "link": "/#contact",
          "num" : "06"
        }
      ]
    }


    render(){
      return(
        <div className="menu">
          <nav className="menu__main">
            <ul className="menu__main-wrapper">
              
              <Link to={'/'} className="logo menu-landing active">
                <img alt="logo" src={logo}/>
              </Link>

              {this.menuLinks.map( ( el, index )=>{
                if(this.separatepage && el.name === 'Resources'){

                  return  (
                    <li key={index}>
                      <NavLink link={ el.link } name={ el.name } active/>
                    </li>
                    )

                }else{

                  return  (
                  <li key={index}>
                    <NavLink link={ el.link } name={ el.name }/>
                  </li>
                  )

                }
              } )}

            </ul>

          </nav>
        </div>
      )
    }
}