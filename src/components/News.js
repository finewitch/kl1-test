import React from 'react'
import { Link } from 'gatsby';
import {SampleNextArrow, SamplePrevArrow} from '../components/atoms/SlickArrows'
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
            infinite: true,
            speed: 500,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ],
            customPaging: function(i) {
                return <span className="counter">{i + 1} of {props.data.length}</span>;
              },
          };
    }
    render(){
       
        return(
            <div className="section-3 news hidden" id="news">

                        <Slider {...this.settings}>

                        {this.props.data.map((el,index)=>{

                            let title = el.node.frontmatter.title;
                            let date = new Date(el.node.frontmatter.date).getUTCDate() + '/' + new Date(el.node.frontmatter.date).getUTCMonth() + '/' + new Date(el.node.frontmatter.date).getFullYear();
                            let slug = el.node.fields.slug;

                            return (
                                    <div className="slider__custom-inner" key={index}>
                                        <div className="slider__custom-inner-content">
                                            <div className="date">{date}</div>        
                                            <div className="title">{title}</div>   
                                        </div>
                                        <Link className="read" to={slug}>
                                        read more
                                        </Link>
                                    </div>  
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
 