import React from 'react';

const NewsImages = ({images}) => {
    if (!images){
        return null
    }else{
    return images.map( image => {
        return(
        <div className="news-image">
            <img src={image.image.childImageSharp.fluid.src} alt={image.title}/>
        <span>{image.title}</span>
        </div>
        )
    })
}
};

export default NewsImages;