import React from 'react'

export const Publication = ({...props}) => {

  return (
    <div className="publications__wrapper-box">

      <div className="publications__wrapper-box-year">{props.year}</div>

      <a rel="noopener noreferrer" href={props.slug} className="publications__wrapper-box-title">
        <div>{props.title}</div>
      </a>

      <div className="publications__wrapper-box-author">{props.authors}</div>

      <div className="publications__wrapper-box-read">
        <a rel="noopener noreferrer" className="btn" href={props.slug}>READ MORE</a>
        <button className="popup-btn" onClick={(citation)=>props.popupHandler(citation)}>citation</button>
        {props.btns.source ? <a rel="noopener noreferrer" href = { props.btns.source } target="_blank" className="btn">publisher's site</a> : null}
      </div>

      <div className="publications__wrapper-box-btns">
      {props.btns.researchgate ? <a rel="noopener noreferrer" className="btn" href = { props.btns.researchgate } target="_blank">researchgate</a> : null}
      {props.btns.preregistration ? <a rel="noopener noreferrer" className="btn" href = { props.btns.preregistration } target="_blank">preregistration</a> : null}
      {props.btns.pdf ? <a rel="noopener noreferrer" className="btn" href = { props.btns.pdf } target="_blank">pdf</a> : null}
      {props.btns.data ? <a rel="noopener noreferrer" className="btn" href = { props.btns.data } target="_blank">data</a> : null}
        
      </div>

    </div>
  )
}

export default Publication