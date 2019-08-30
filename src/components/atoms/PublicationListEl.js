import React from 'react'
import { Link } from 'gatsby';

export const Publication = ({...props}) => {

  console.log(props.year, '<---in pubs');
  const currentYear = new Date().getFullYear();
  function setYear(year){

    if (year > currentYear){
      return <span>In press</span>
    }else{
      return year
    }

  }

  return (
    <div className="publications__wrapper-box">

      <div className="publications__wrapper-box-year">{ setYear(props.year) }</div>

      <div className="publications__wrapper-box-title">
        <Link to={props.slug}>{ props.title }</Link>
        <br/>
        <Link to={props.slug} className="readmore">read more</Link>
      </div>

      <div className="publications__wrapper-box-author">{props.authors}</div>

      <div className="publications__wrapper-box-read">
        
        {props.citation ? <button className="popup-btn" onClick={(citation)=>props.popupHandler(citation)}>citation</button> : null}

        {props.btns.source ? <a rel="noopener noreferrer" href = { props.btns.source } target="_blank" className="btn">publisher's site</a> : null}
        
        {props.btns.researchgate ? <a rel="noopener noreferrer" className="btn" href = { props.btns.researchgate } target="_blank">researchgate</a> : null}
        {props.btns.preregistration ? <a rel="noopener noreferrer" className="btn" href = { props.btns.preregistration } target="_blank">preregistration</a> : null}
        {props.btns.pdf ? <a rel="noopener noreferrer" className="btn" href = { props.btns.pdf.publicURL } target="_blank">pdf</a> : null}

        {props.btns.data ? <a rel="noopener noreferrer" className="btn" href = { props.btns.data.publicURL } target="_blank">data</a> : null}
  
      </div>

    </div>
  )
}

export default Publication