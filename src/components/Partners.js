
import React from 'react'
import logo_1 from '../img/partners/logo1.svg';
import logo_2 from '../img/partners/logo2.svg';
import logo_3 from '../img/partners/logo3.svg';
import logo_4 from '../img/partners/logo4.svg';
import logo_5 from '../img/partners/logo5.svg';
import logo_6 from '../img/partners/logo99.svg';

const links={
  link1: 'yolo',
  link2: 'yolo',
  link3: 'yolo',
  link4: 'yolo',
  link5: 'yolo',
  link6: 'yolo',


}
export default class Partners extends React.Component {


  render(){
    return(
        <div className="partners">
            <a href={links.link1}><img alt="partner logo" src={logo_1}/></a>
            <a href={links.link2}><img alt="partner logo" src={logo_2}/></a>
            <a href={links.link3}><img alt="partner logo" src={logo_3}/></a>
            <a href={links.link4}><img alt="partner logo" src={logo_4}/></a>
            <a href={links.link5}><img alt="partner logo" src={logo_5}/></a>
            <a href={links.link6}><img alt="partner logo" src={logo_6}/></a>
        </div>

    )
  }
}