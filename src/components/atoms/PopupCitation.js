import React from 'react'

export const PopupCitation = ({data, onClickClose}) => {
    console.log(data, 'in ppup')
    let apa = Object.keys(data)[0];
    let mla = Object.keys(data)[2];
    let iso = Object.keys(data)[1];

    console.log(apa,mla,iso);


    function generateRow(type){

        console.log('type--  ', type)
        return (
            <tr>
                <td className="name">{type.toUpperCase()}</td>
                <td className="content" tabindex="0">{data[type]}</td>
            </tr>
        )
    }


  return (
    <div className="publications__popup">
        <div className="publications__popup-inner">
            <div className="publications__popup-inner-close" onClick={onClickClose}>

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                    viewBox="0 0 371.23 371.23">
                    <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "/>
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            </div>

            <div className="publications__popup-inner-content">
                <table className="citations">
                    <tbody>
                        
                        {data[apa] ? generateRow(apa) : null}
                        {data[mla] ? generateRow(mla) : null}
                        {data[iso] ? generateRow(iso) : null}
                            
                    </tbody>
                </table>
                
            </div>
        

        </div>
      
    </div>
  )
}

export default PopupCitation