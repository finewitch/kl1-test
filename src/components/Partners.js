
import React from 'react'
import logo_1 from '../img/partners/logo1.svg';
import logo_2 from '../img/partners/logo2.svg';
import logo_3 from '../img/partners/logo3.svg';
import logo_4 from '../img/partners/logo4.svg';
import logo_5 from '../img/partners/logo5.svg';
import logo_6 from '../img/partners/logo99.svg';

export default class Partners extends React.Component {

  render(){
    return(
        <div className="partners">
            <img alt="partner logo" src={logo_1}/>
            <img alt="partner logo" src={logo_2}/>
            <img alt="partner logo" src={logo_3}/>
            <img alt="partner logo" src={logo_4}/>
            <img alt="partner logo" src={logo_5}/>
            <img alt="partner logo" src={logo_6}/>
        </div>

    )
  }
}