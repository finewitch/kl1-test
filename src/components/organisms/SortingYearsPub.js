import React from 'react'
// import PropTypes from 'prop-types'

export default class SortingYears extends React.Component {


    render(){
        return(
            <h4>
                <div className="publications-title-yearsort">
                    <button onClick={()=> this.props.StateHandlerFunction(0)}>all</button>
                    <span>/</span>
                </div>

                {this.props.years.map((el, index, arr)=>{
                        if(arr.length -1 === index){

                            return(
                            <div key = {index} className="publications-title-yearsort">
                                <button onClick={()=> this.props.StateHandlerFunction(el)}>{el}</button>
                                <span></span>
                            </div>
                            )

                        }else{
                                
                            return (
                                <div key = {index} className="publications-title-yearsort">
                                    <button onClick={()=> this.props.StateHandlerFunction(el)}>{el}</button>
                                    <span>/</span>
                                </div>
                            )

                        }

                })}
            </h4>
        )
    
  }
}
