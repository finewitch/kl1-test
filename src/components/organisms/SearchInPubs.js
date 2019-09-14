import React from 'react'

export default class SearchInPubs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    handleChange(event) {

        this.setState({value: event.target.value}, function(){

            this.props.StateHandlerFunction(this.state.value)

        });

      }
    render(){
      return(
        <div className="publications-search">
            <input onChange={(event)=>this.handleChange(event)} placeholder="Search" value={this.state.value}></input>
        </div>
      )
    }
}