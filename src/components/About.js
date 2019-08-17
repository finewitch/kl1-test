import React from 'react'
// import LinkIco from './atoms/LinkIco'

export default class About extends React.Component {
    render(){
        return(
            <div className="section-2 goals" id="about">
                <div className="section__wrapper">
                    <div className="title-row">
                    <h3 className="color-green-header">about</h3>

                   
                    </div>

                    <div className="goals__top">

                        <h2>
                        The CSPACE lab (Science of Personality, Addiction, and Religion, Throughout Adulthood) at Bowling Green State University is comprised of myself, my current graduate students, and a number of undergraduate students.
                        </h2>
                        
                    </div>

                    <div className="goals__bottom">

                        <div className="goals__bottom-column">
                            <div className="goals__bottom-column-title">INTERNET ADDICTION</div>
                            <div className="goals__bottom-column-content">
                                <p>To make this information usable for a runner, we needed to develop a communication system that would wirelessly send real-time data to runners via their smartphone. </p>
                                <p>This feedback mechanism needed to be user-friendly, allowing runners to easily interpret information.</p>

                                </div>
                        </div>

                        <div className="goals__bottom-column">
                                <div className="goals__bottom-column-title">CLINICAL PSYCHOLOGY</div>
                            
                                <div className="goals__bottom-column-content">
                                    <p>Cooper Perkins brings exceptional engineering skills and experience to solve our partners' most challenging technical problems.
                                    </p>
                                    <p>Cooper Perkins brings exceptional engineering skills and experience to solve our partners' most challenging technical problems.
                                    </p>
                                </div>


                        </div>

                    </div>


                </div>

            </div>
        )}

}
