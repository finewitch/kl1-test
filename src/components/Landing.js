import React from 'react'
// import PropTypes from 'prop-types'
import LinkIco from './atoms/LinkIco'


  export default class Landing extends React.Component {

    render(){

      return(

        <div className="section-1 landing">
          <div className="landing__wrapper">
            <div className="landing__wrapper-title">
              
              {/* <h1><span className="landing__wrapper-title-span"></span>What<span className="landing__wrapper-title-span">’</span>s <br/>Clinical <br/>
              Space<span className="landing__wrapper-title-span">?</span></h1> */}
              <h1><span className="landing__wrapper-title-span"></span>{this.props.title}</h1>
              
        
            </div>

            <div className="landing__wrapper-scroll">

              <svg width="49" height="49" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="scroll-svg">
                  <circle cx="9.00078" cy="9.00053" r="8.99849" transform="rotate(-0.0145765 9.00078 9.00053)" fill="#242424"/>
                  <g clipPath="url(#clip0)">
                  <path d="M6.42875 6.49268C6.35507 6.24318 6.28433 5.99326 6.23116 5.7538C5.8816 5.54699 5.64382 5.17064 5.64382 4.73568C5.64382 4.08136 6.1759 3.54969 6.82981 3.54969C7.48371 3.54969 8.01579 4.08178 8.01579 4.73568C8.01579 4.82569 8.00365 4.91234 7.98481 4.99649C8.09826 5.24641 8.18994 5.52773 8.27032 5.81366C8.49638 5.51225 8.63537 5.14175 8.63537 4.73568C8.63537 3.73808 7.82741 2.93011 6.82981 2.93011C5.8322 2.93011 5.02466 3.73808 5.02466 4.73568C5.02466 5.59472 5.6254 6.31016 6.42875 6.49268Z" fill="#C6C6C6"/>
                  <path d="M5.18168 10.7674C5.62669 10.2864 6.12612 10.4747 6.79468 10.5765C7.36904 10.6648 7.93461 10.5036 7.89694 10.1934C7.83749 9.69147 7.75376 9.46709 7.56329 8.81695C7.41132 8.29994 7.12288 7.36806 6.8604 6.47721C6.50875 5.28536 6.40702 4.73192 6.87505 4.59377C7.37951 4.44683 7.66878 5.16353 7.93085 6.15737C8.22933 7.28852 8.38632 7.78795 8.47423 7.76157C8.62913 7.7172 8.4173 7.23326 8.82254 7.11395C9.32908 6.96659 9.42704 7.36262 9.56896 7.32284C9.71087 7.28014 9.66273 6.87909 10.0667 6.76104C10.4728 6.64382 10.6767 7.14367 10.8441 7.09385C11.0099 7.04487 11.0061 6.86444 11.2565 6.79286C11.5072 6.71834 12.4508 7.14074 12.9909 8.98566C13.6686 11.3053 12.905 11.7365 13.1366 12.5219L10.1111 13.6723C9.86619 13.0832 9.10762 13.0397 8.43656 12.6642C7.76046 12.2837 7.30122 11.5423 5.53919 11.5783C4.8765 11.5916 4.90789 11.0633 5.18168 10.7674Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="10.7421" height="10.7421" fill="white" transform="translate(3.76758 2.93011)"/>
                  </clipPath>
                  </defs>
              </svg>
              <span>{this.props.subheading}</span>

            </div>
            </div>

        </div> 

      )
    }
    
  }
  