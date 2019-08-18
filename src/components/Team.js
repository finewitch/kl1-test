import React from 'react';
import team from '../img/team/ziutek1.png';
// import team1 from '../img/team/ziutek2.png';

const bla = [1,2,3,4,5,6,7]
export default class Team extends React.Component {
    constructor(props) {
        super();
        // console.log(props, '<---TEAM')
    }
    render(){
        return(
            <div className="section-3 goals" id="team">
                <div className="section__wrapper team">
                    <div className="title-row">
                        <h3 className="color-green-header">team</h3>
                    </div>
                </div>
                    <div className="team__content">
                        {bla.map( (el, index)=>{
                                return(
                                    <div className="team__content-imgcont">
                                        <span>Kamil Lewczuk</span>
                                        <img alt="yyy" src={team}/>
                                    </div>
                                ) 
                                

                        } )}
                    </div>
                </div>
            // </div>
        )}

}
