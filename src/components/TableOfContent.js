import React from 'react'

export default class TableOfContent extends React.Component {
    constructor(props) {
      super(props);
    }


    render(){
      return(
          <div>
              <h2 className="landing__wrapper-title-num">{this.props.page}</h2>
          </div>
      )}
}