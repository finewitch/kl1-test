import React from 'react'
// import PropTypes from 'prop-types'


  export default class Landing extends React.Component {

    render(){

      return(

        <div className="section-1 landing">
          <div className="landing__wrapper">
            
            <div className="landing__wrapper-title">
              <h1><span className="landing__wrapper-title-span"></span>Clinical Research <br/>Space</h1>
            </div>

            <div className="landing__wrapper-scroll">

              {/* <ArrowIcon/>       */}
              <button className="trigger">
                <i className="fa fa-angle-double-down animated infinite bounce"></i>
              </button>
              <span>scroll down to explore / drop us a line</span>

              </div>
            </div>

        </div> 

      )
    }
    
  }
  