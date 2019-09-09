import React from 'react';
import { Link } from 'gatsby';
import rgIcon from '../img/social/rg.svg'
import gsIcon from '../img/social/gs.svg'
import ChapterAnnouncement from './atoms/ChapterAnnouncement'
export default class Team extends React.Component {

    onClickHandler = function(e, URL){
        e.preventDefault();
        window.open(URL, "_blank")
    }
    render(){
        return(
            <div className="section-4 team hidden" id="team">

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
                            let rg = el.node.frontmatter.rg
                            let gs = el.node.frontmatter.gs
                            return ( 
                                <Link to={ slug }key={index} className="team__content-box">

                                    <img alt="team member" src={img}/>

                                    <div className="team__content-box-data">

                                        <span className="name">  {name } </span>
                                        <p className="link"> see full profile </p>    

                                        <span onClick={(e)=>this.onClickHandler(e, rg)}>
                                            <img alt="reserchgate" src={rgIcon}/>
                                            <span>researchgate</span>
                                        </span>

                                        <span onClick={(e)=>this.onClickHandler(e, gs)}>
                                            <img alt="googlescholar" src={gsIcon}/>
                                            <span>google scholar</span>
                                        </span>
                                    </div>

                                </Link>
                            )
                        })
                        }

                    </div>
                    <ChapterAnnouncement />
                   
                </div>
        )}

}
