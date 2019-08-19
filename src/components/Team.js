import React from 'react';
export default class Team extends React.Component {
    constructor(props) {
        super();
        console.log(props, '<---TEAM')
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
                        {this.props.data.map( ( el, index )=>{
                            let name = el.node.frontmatter.title
                            let img = el.node.frontmatter.image.publicURL
                            let slug = el.node.fields.slug
                            return ( 
                                <a href={slug} className="team__content-imgcont">
                                        <span> { name } </span>
                                        <img alt="yyy" src={img}/>
                                    </a>
                            )
                        })
                        }
                        {/* {bla.map( (el, index)=>{
                                return(
                                    <div className="team__content-imgcont">
                                        <span>Kamil Lewczuk</span>
                                        <img alt="yyy" src={team1}/>
                                    </div>
                                ) 
                                

                        } )} */}
                    </div>
                </div>
            // </div>
        )}

}
