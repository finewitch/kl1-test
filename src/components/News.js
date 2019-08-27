import React from 'react'
import Swiper from 'react-id-swiper';

export default class News extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props, '<--props in news')
        this.params = {
            width : 1100,
            containerClass: 'customized-swiper-container',
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next .swiper-button-white',
                prevEl: '.swiper-button-prev .swiper-button-white'
              },
          }
    }
    render(){
        return(
            <div className="section-3  news" id="team">

                <div className="section__wrapper team">
                    <div className="title-row">
                        <h3 className="color-green-header">News</h3>
                    </div>
                </div>

               <Swiper {...this.params}>

                {this.props.data.map((el)=>{
                    let title = el.node.frontmatter.title;
                    let date = new Date(el.node.frontmatter.date).getUTCDate() + '/' + new Date(el.node.frontmatter.date).getUTCMonth() + '/' + new Date(el.node.frontmatter.date).getFullYear();
                    let content = el.node.frontmatter.content;
                    let slug = el.node.fields.slug;
                    console.log(slug, '<------')
                    return (

                        <a href={slug} className="news__box">
                            <div className="news__box-date">{date}</div>        
                            <div className="news__box-title">{title}</div>        
                            <div className="news__box-content">{content}</div>        

                        </a>

                    )

                    })}
                </Swiper> 

      


            </div>


        )}

}
