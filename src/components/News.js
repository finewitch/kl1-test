import React from 'react'
// import Swiper from 'react-id-swiper';
// import ArrowIcon from '../components/atoms/ArrowIcon'
import { Link } from 'gatsby';
import {SampleNextArrow, SamplePrevArrow} from './atoms/slickArrows'
import Slider from "react-slick";

export default class News extends React.Component {

    
    constructor(props){
        super(props);
        this.state={
            totalSlides : 10,
            currentSlide: 1,
        }
        this.settings = {
            className: 'slick__custom',
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
    }
    render(){
       
        return(
            <div className="section-3 news hidden" id="news">

                        <Slider {...this.settings}>

                        {this.props.data.map((el,index)=>{

                            let title = el.node.frontmatter.title;
                            let date = new Date(el.node.frontmatter.date).getUTCDate() + '/' + new Date(el.node.frontmatter.date).getUTCMonth() + '/' + new Date(el.node.frontmatter.date).getFullYear();
                            // let content = el.node.frontmatter.content;
                            let slug = el.node.fields.slug;
                            let imgData = el.node.frontmatter.image === null ? null : el.node.frontmatter.image.publicURL;

                            let img = function renderImg(){
                                if (imgData){
                                    return <img alt="news post" src={imgData}/>
                                }else{
                                    return null
                                }
                            }

                            return (
                                // <div className="slider__custom">
                                    <div className="slider__custom-inner" key={index}>
                                        {/* { img() } */}
                                        <div className="slider__custom-inner-content">
                                            <div className="date">{date}</div>        
                                            <div className="title">{title}</div>   
                                        </div>


                                        <Link className="read" to={slug}>
                                        read more
                                        {/* <ArrowIcon/> */}
                                        </Link>
                                    </div>  

                                // </div>
                            )

                            })}

                        </Slider>
                        

                        <div className="section__wrapper news">
                            <div className="title-row">
                                <h3>News |<span>| Blog</span></h3>
                            </div>
                        </div>

                </div>


        )}


}
 
