import React from 'react'
// import PropTypes from 'prop-types'


  export default class Landing extends React.Component {


    render(){

      return(

        <div className="section-1 landing hidden" id="landing">
          <div className="landing__wrapper">
            
            <div className="landing__wrapper-title">
              <p className="main-title">
                <span className="main"> CSPACE </span><span className="additional">.</span> 
              </p>
              <p className="sub-title">
              <span className="main">CSPACE</span> 
              <span className="additional"> [ </span> 
              <span className="main">CLINICAL RESEARCH SPACE</span> 
              <span className="additional"> ] </span> 
              <span className="main">designs, carries out and communicates clinical psychology & psychiatry research
              </span>
              </p>
            </div>

            <div className="landing__wrapper-scroll">

              {/* <ArrowIcon/>       */}
              <button className="trigger" onClick={()=>this.onClickHandler()}>
                <i className="fa fa-angle-double-down animated infinite bounce"></i>
              </button>
              <span >scroll down to explore / drop us a line</span>

              </div>
            </div>

        </div> 

      )
    }
    onClickHandler(){
      document.querySelector('#about').scrollIntoView({ block: 'end',  behavior: 'smooth' });
     }
    
  }
  