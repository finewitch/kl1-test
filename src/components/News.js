import React from 'react'
import Swiper from 'react-id-swiper';
import ArrowIcon from '../components/atoms/ArrowIcon'
import { Link } from 'gatsby';

export default class News extends React.Component {

    constructor(props){
        super(props);
        this.params = {
            // width : 1000,
            containerClass: 'customized-swiper-container',
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
              },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

          }
    }
    render(){
        return(
            <div className="section-3  news" id="news">

                <div className="section__wrapper team">
                    <div className="title-row">
                        <h3 className="color-green-header">News / Blog</h3>
                    </div>
                </div>

               <Swiper {...this.params}>

                {this.props.data.map((el,index)=>{
                    let title = el.node.frontmatter.title;
                    let date = new Date(el.node.frontmatter.date).getUTCDate() + '/' + new Date(el.node.frontmatter.date).getUTCMonth() + '/' + new Date(el.node.frontmatter.date).getFullYear();
                    let content = el.node.frontmatter.content;
                    let slug = el.node.fields.slug;
                    let imgData = el.node.frontmatter.image === null ? null : el.node.frontmatter.image.publicURL;
                    let img = function renderImg(){
                        if (imgData){
                            return <img alt="news post" src={imgData}/>
                        }else{
                            return (
                                <div>
                                    <div className="news__box-content">{content}</div>
                                    <p>&bull;	&bull;	&bull;</p>
                                </div>
                            )
                        }
                    }
                    
                    return (
                        <Link to={slug} className="goback" key={index}>   
                            <div className="news__box-date">{date}</div>        
                            <div className="news__box-title">{title}</div>   

                            { img() }

                            <div className="news__box-read" href={slug}>
                            read more
                            <ArrowIcon/>
                            </div>     

                        </Link>

                    )

                    })}

                </Swiper> 
            </div>


        )}

}
