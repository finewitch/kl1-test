import React from 'react'
import { Link } from 'gatsby';

export const Publication = ({...props}) => {

  return (
    <div className="publications__wrapper-box">

      <div className="publications__wrapper-box-year">{props.year}</div>

      <div className="publications__wrapper-box-title">
        <Link to={props.slug}>{ props.title }</Link>
        <br/>
        <Link to={props.slug} className="readmore">read more</Link>
      </div>

      <div className="publications__wrapper-box-author">{props.authors}</div>

      <div className="publications__wrapper-box-read">
        
        <button className="popup-btn" onClick={(citation)=>props.popupHandler(citation)}>citation</button>
        {props.btns.source ? <a rel="noopener noreferrer" href = { props.btns.source } target="_blank" className="btn">publisher's site</a> : null}
      {/* </div> */}

      {/* <div className="publications__wrapper-box-btns"> */}
        
        {props.btns.researchgate ? <a rel="noopener noreferrer" className="btn" href = { props.btns.researchgate } target="_blank">researchgate</a> : null}
        {props.btns.preregistration ? <a rel="noopener noreferrer" className="btn" href = { props.btns.preregistration } target="_blank">preregistration</a> : null}
        {props.btns.pdf ? <a rel="noopener noreferrer" className="btn" href = { props.btns.pdf.publicURL } target="_blank">pdf</a> : null}
        {props.btns.data ? <a rel="noopener noreferrer" className="btn" href = { props.btns.data } target="_blank">data</a> : null}
  
      </div>

    </div>
  )
}

export default Publication