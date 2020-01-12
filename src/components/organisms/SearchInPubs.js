import React from 'react'

export default class SearchInPubs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            icon: null
        };
    }
    handleChange(event) {

        this.setState(
            {
                value: event.target.value,
                icon: 'delete'
            }, function(){

            this.props.StateHandlerFunction(this.state.value)

        });

    }
    handleOnClick(){
        this.setState(
            {
                value: '',
                icon: null
            },function(){

            this.props.StateHandlerFunction('')

        });
    }
    render(){
      return(
        <div className="publications-search">
            <input onChange={(event)=>this.handleChange(event)} placeholder="Type title / authors / journal" value={this.state.value}></input>
            <div 
            onClick={()=> this.handleOnClick()}
            onKeyDown={()=> this.handleOnClick()}
            role="button"
            tabIndex="0"
        >
                {this.state.icon === 'delete' ? 
                 <svg version="1.1" id="Layer_1" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249
                                C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306
                                C514.019,27.23,514.019,14.135,505.943,6.058z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636
                                c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/>
                        </g>
                    </g>
                </svg>
                :

            <svg version="1.1" x="0px" y="0px" viewBox="0 0 451 451">
                <g>
                    <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
                    s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
                    C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
                    s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
                }
            </div>
        </div>
      )
    }
}