import React from 'react'
import ArrowIcon from './atoms/ArrowIcon'
// import PropTypes from 'prop-types'


  export default class Landing extends React.Component {

    render(){

      return(

        <div className="section-1 landing">
          <div className="landing__wrapper">
            
            <div className="landing__wrapper-title">
              <h1><span className="landing__wrapper-title-span"></span>Clinical <br/>Research <br/>Space</h1>
            </div>

            <div className="landing__wrapper-scroll">

            <ArrowIcon/>      
              <span>{this.props.scrollText}</span>
            </div>
            </div>

        </div> 

      )
    }
    
  }
  