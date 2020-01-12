import React from 'react'

export default class About extends React.Component {
    render(){
        return(
            <div className="section-2 about hidden" id="about">
                <div className="section__wrapper">
                    <div className="main font-2-bold">
                        <p className="main-title font-black">About</p>
                        <span className="paragraph">CSPACE<span className="font-red">:</span> Clinical Research Space, </span>
                        <span className="paragraph">is a group of people that aims to </span>
                        <span className="paragraph">advance scientific understanding </span>
                        <span className="paragraph">of human behavior <span className="font-black">&</span> its disorders. </span>
                        <span className="paragraph">Established in 2020, Cspace is </span>
                        <span className="paragraph">a cross-institutional clinical psy- </span>
                        <span className="paragraph">chology and psychiatry research </span>
                        <span className="paragraph">team, based <span className="font-gray">(mostly)</span> in Warsaw, PL.</span>
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