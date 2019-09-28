import React from 'react'

export default class About extends React.Component {
    render(){
        return(
            <div className="section-2 about hidden" id="about">
                <div className="section__wrapper">

                    <div className="about__column left">
                        <div>

                            <p className="font-1">
                                <span className="n-visible">CSPACE</span>
                                <span className="font-red">.</span>
                            </p>
                            <p className="font-gray font-2-light n-visible">short for </p>
                            <p className="font-red">Clinical </p>
                            <p className="font-red">Research</p>
                            <p className="font-red">Space</p>

                        </div>

                        <div>
                            <p className="n-visible"> . . . is a cross-institutional clinical </p>
                            <p className="n-visible">psychology & psychiatry research</p>
                            <p>
                                <span className="n-visible">team</span>
                                <span className="font-gray n-visible"> based <small>(mostly)</small> in</span> 
                                <span className="font-red"> Warsaw, Poland</span>
                            </p>
                        </div>

                    </div>

                    <div className="about__column right">
                        <div>
                            
                            <p className="font-gray">
                                <span className="font-1">
                                    <span className="n-visible">.</span>
                                    <span className="font-red bigger">C</span>
                                    <span className="n-visible">SPACE</span>
                                </span> 
                                <span className="n-visible"> is a group of people </span>
                            </p>
                            <p>
                                <span className="font-gray n-visible">that aims to advance </span>
                                <span className="bigger n-visible">scientific</span>
                            </p>
                            <p><span className="bigger n-visible">understanding of </span>
                                <span className="font-gray n-visible">
                                    <small className="font-2-light "> (human) </small>
                                </span>
                            </p>
                            <p className="font-gray n-visible">behavior and its disorders </p>

                        </div>

                        <div>

                            <p className="n-visible">Want to</p>
                            <p className="n-visible">Collaborate </p>
                            <p className="font-gray">with us</p>
                            <p className="n-visible">Join 
                                <span className="gray"> us</span>
                            </p>
                            <p className="n-visible">
                                <span className="font-gray"> ? </span>
                                <a href="#contact" className="button">contact</a>
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        )}

}