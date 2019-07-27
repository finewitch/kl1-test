import React from 'react'

export const Publication = ({slug, title, authors, year, citation, popupHandler}) => {

  return (
    <div className="publications__wrapper-box">

      <div className="publications__wrapper-box-year">{year}</div>

      <a href={slug} className="publications__wrapper-box-title">
        <div>{title}</div>
      </a>

      <div className="publications__wrapper-box-author">{authors}</div>

      <div className="publications__wrapper-box-read">
        <a href={slug}>READ MORE</a>
        <button onClick={(citation)=>popupHandler(citation)}>citation</button>
      </div>

      <div className="publications__wrapper-box-btns">
        <a href="/#nowhere">source</a>
      </div>

    </div>
  )
}

export default Publication