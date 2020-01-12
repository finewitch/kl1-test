import React from 'react';
import { Link } from 'gatsby';
import rgIcon from '../img/social/rg.svg';
import gsIcon from '../img/social/gs.svg';

export default class Team extends React.Component {
    onClickHandler = function(e, URL){
        e.preventDefault();
        window.open(URL, "_blank")
    }
    render(){
        // console.log(this.props)
        return(
            <div className="section-4 team hidden" id="team">

                    <div className="team__content">

                        <div className="team__content-box title">
                            <div className="title__cont">
                                <div><span>T</span><span>E</span></div>
                                <div><span>A</span><span>M</span></div>
                            </div>

                    
                        </div>
                        
                        {this.props.data.map( ( el, index )=>{
                            let name = el.node.frontmatter.title
                            let img = el.node.frontmatter.image || null
                            let slug = el.node.fields.slug
                            let rg = el.node.frontmatter.rg
                            let gs = el.node.frontmatter.gs
                            return ( 
                                <Link to={ slug } key={index} className="team__content-box">

                                    <img alt="team member" src={img.childImageSharp.fluid.src}/>

                                    <div className="team__content-box-data">

                                        <span className="name">  {name } </span>
                                        <p className="link"> see full profile </p>    

                                        <span 
                                        role="button"
                                        tabIndex="0"
                                        onKeyDown={(e)=>this.onClickHandler(e, rg)}
                                        onClick={(e)=>this.onClickHandler(e, rg)}>
                                            <img alt="reserchgate" src={rgIcon}/>
                                            <span>researchgate</span>
                                        </span>

                                        <span 
                                        role="button"
                                        tabIndex="0"
                                        onKeyDown={(e)=>this.onClickHandler(e, rg)}
                                        onClick={(e)=>this.onClickHandler(e, gs)}>
                                            <img alt="googlescholar" src={gsIcon}/>
                                            <span>google scholar</span>
                                        </span>
                                    </div>

                                </Link>
                            )
                        })
                        }

                    </div>
                   
                </div>
        )}

}