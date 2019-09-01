import React from 'react'

export default class About extends React.Component {
    render(){
        return(
            <div className="section-2 goals" id="about">
                <div className="section__wrapper">
                    <div className="title-row">
                    <h3 className="color-green-header">CSPACE
                        <span className="header-color">.</span>
                    </h3>

                   
                    </div>

                    <div className="goals__top">

                        <h2>
                        CSpace - Clinical Research Space - is a cross-institutional research group established in 2018, located in Warsaw, Poland. CSpace comprises X people and a number of external collaborators. In our research we use psychometric, self-report techniques, ecological momentary assessment and cognitive tasks.
                        </h2>
                        
                    </div>

                    <div className="goals__bottom">

                        <div className="goals__bottom-column">
                            <div className="goals__bottom-column-title">Compulsive sexual behavior disorder</div>
                            <div className="goals__bottom-column-content">
                                <p>Compulsive sexual behavior disorder and problematic pornography use 
With the recognition of compulsive sexual behavior disorder in ICD-11, we carry out research on characteristics, determinants and therapy of the disorder. </p>
                                {/* <p>This feedback mechanism needed to be user-friendly, allowing runners to easily interpret information.</p> */}

                                </div>
                        </div>

                        <div className="goals__bottom-column">
                                <div className="goals__bottom-column-title">Behavioral addictions</div>
                            
                                <div className="goals__bottom-column-content">
                                    <p>We conduct research on Internet addiction and its subtypes: social networking, pornography, gambling, video streaming, online shopping, online gaming addiction and others.
                                    </p>
                                    {/* <p>Cooper Perkins brings exceptional engineering skills and experience to solve our partners' most challenging technical problems.
                                    </p> */}
                                </div>


                        </div>

                        <div className="goals__bottom-column">
                                <div className="goals__bottom-column-title">Other topics in (clinical) psychology</div>
                            
                                <div className="goals__bottom-column-content">
                                    <p>Our research address other topics relevant for clinical psychology and psychiatry, as well as broader psychological research (e.g., emotion regulation and mindfulness).
                                    </p>
                                    {/* <p>Cooper Perkins brings exceptional engineering skills and experience to solve our partners' most challenging technical problems.
                                    </p> */}
                                </div>


                        </div>

                    </div>


                </div>

            </div>
        )}

}
