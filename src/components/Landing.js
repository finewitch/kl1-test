import React from 'react'
import ArrowIcon from './atoms/ArrowIcon'
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

              <ArrowIcon/>      
              <span>{this.props.scrollText}</span>
              </div>
         <div id="duperel1">

         {/* <svg width="1682" height="446" viewBox="0 0 1682 446" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M777.904 11.0393C259.605 -50.524 202 182 202 182C683.946 182 1603.85 182.876 1676.44 182.988C1677.29 182.996 1678.16 183 1679.06 183C1682.4 183 1681.39 182.996 1676.44 182.988C1627.06 182.538 1635.76 169.171 1568.36 150.008C1512.53 128.013 1279.85 114.575 1184.39 111.516C1088.94 108.458 1026.21 40.5325 777.904 11.0393Z" fill="#E6F2FF"/>
<path d="M0 114H227C199.5 234 60.4959 384.588 0 446V114Z" fill="#F7FBFE"/>
</svg> */}



         </div>
            </div>

        </div> 

      )
    }
    
  }
  