import React from 'react'

export default class Navbar extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
         menu_short : false,
        };
    }

    clickHandler = function(param){
      console.log('click', param)
      if(param){

        this.setState({ menu_short: false })

      }else{

        this.setState({ menu_short: true })

      }
    }

    render(){
      return(
        <div className={`menu ${this.props.loading ? 'loading-menu' : null }`}>

          <div className="menu__main">

            <ul className="menu__main-wrapper">
              <li>
                <a href="#needtofillhere">
                <span>01</span>
                  Home</a>
              </li>
              <li>
                <a href="#needtofillhere">
                <span>02</span>
                  About</a>
              </li>
              <li>
                <a href="#needtofillhere">
                <span>03</span>
                  Publicationsg
                </a>
                
              </li>
              <li>
                <a href="#needtofillhere">
                <span>04</span>
                  Contact & News
                  </a>
              </li>
            </ul>

            {this.state.menu_short ?    
            <a href="#needtofillhere" id="menu-open" onClick = {()=>this.clickHandler(true)}>

            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="25" y2="0.5" stroke="white"/>
              <line y1="11.2302" x2="25" y2="11.2302" stroke="white"/>
              <rect y="21.7727" width="1.13636" height="1.70455" fill="white"/>
              <rect x="11.9316" y="21.7727" width="1.13636" height="1.70455" fill="white"/>
              <rect x="23.8638" y="21.7727" width="1.13636" height="1.70455" fill="white"/>
            </svg>

            </a>: null}
          </div>
          
          {this.state.menu_short ? null :      <div className="menu__side">
            <ul className="menu__side-wrapper">
              <li>
                <a href="#needtofillhere">
                <span>02.1</span>
                  Team
                  </a>
              </li>
              <li>
                <a href="#needtofillhere">
                <span>03.1</span>
                  Resources
                  </a>
              </li>
            </ul>

            <a href="#needtofillhere" id="menu-close" onClick = {()=>this.clickHandler(false)}>
              <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.18629" y1="22.6067" x2="23.1066" y2="0.686342" stroke="white"/>
                <line x1="1.89339" y1="0.686242" x2="23.8137" y2="22.6066" stroke="white"/>
              </svg>
            </a>
            </div>}
        </div>

  
      )
    }
}