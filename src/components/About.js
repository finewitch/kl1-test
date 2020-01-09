import React from 'react'

export default class About extends React.Component {
    render(){
        return(
            <div className="section-2 about hidden" id="about">
                <div className="section__wrapper">
                    <div class="main font-2-medium">
                        <p className="main-title font-black">About</p>
                        CSPACE<span className="font-red">:</span> Clinical Research Space, 
                        is a group of people that aims to 
                        advance scientific understanding 
                        of human behavior <span className="font-black">&</span> its disorders. 
                        Established in 2020, Cspace is 
                        a cross-institutional clinical psy- 
                        chology and psychiatry research 
                        team, based <span className="font-gray">(mostly)</span> in Warsaw, PL.
                    </div>

                    <div className="side font-2-black">

                        <p>Want to collaborate <span className="font-gray">with us?</span></p>
                        <p>Join <span className="font-gray">us ?</span></p>
                        <p><span className="font-gray">Have a</span> question<span className="font-gray">?</span></p>

                        <a href="#contact" className="button">contact</a>

                        </div>
                    </div>

                </div>

        )}

}