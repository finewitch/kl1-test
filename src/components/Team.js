import React from 'react';
import { Link } from 'gatsby'
export default class Team extends React.Component {
    render(){
        return(
            <div className="section-3 team" id="team">

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
                                <div key={index} className="team__content-imgcont">

                                    <img alt="team member" src={img}/>

                                    <div className="team__content-imgcont-data">
                                        <span className="name">  {name } </span>

                                        <Link to={ slug }> profile </Link>      
                                        <a href={slug}> research gate </a>
                                        <a href={slug}> google scholar </a>
                                    </div>


                                </div>
                            )
                        })
                        }

                    </div>
                </div>
        )}

}
