
import React from 'react'
import logo_1 from '../img/partners/logo1.svg';
import logo_2 from '../img/partners/logo2.svg';
import logo_3 from '../img/partners/logo3.svg';
import logo_4 from '../img/partners/logo4.svg';
import logo_5 from '../img/partners/logo5.svg';
import logo_6 from '../img/partners/logo6.svg';

const links={
  link1: 'http://hiperseksualnosc.pl/',
  link2: 'http://www.psychologia.wfch.uksw.edu.pl/',
  link3: 'https://psych.pan.pl/pl/',
  link4: 'https://ucsd.edu/',
  link5: 'http://psych.uw.edu.pl/',
  link6: 'http://lew-starowicz.pl/',


}
export default class Partners extends React.Component {


  render(){
    return(
        <div className="partners">
            <a href={links.link1} rel="noopener noreferrer" target="_blank"><img alt="partner logo" src={logo_1}/></a>
            <a href={links.link2} rel="noopener noreferrer" target="_blank"><img alt="partner logo" src={logo_2}/></a>
            <a href={links.link3} rel="noopener noreferrer" target="_blank"><img alt="partner logo" src={logo_3}/></a>
            <a href={links.link4} rel="noopener noreferrer" target="_blank"><img alt="partner logo" src={logo_4}/></a>
            <a href={links.link5} rel="noopener noreferrer" target="_blank"><img alt="partner logo" src={logo_5}/></a>
            <a href={links.link6} rel="noopener noreferrer" target="_blank"><img alt="partner logo" src={logo_6}/></a>
        </div>

    )
  }
}