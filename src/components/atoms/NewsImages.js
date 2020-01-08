import React from 'react';

const NewsImages = ({images: images}) => {
    if (!images){
        return null
    }else{
    return images.map( image => {
        return(
        <div className="news-image">
            <img src={image.image.childImageSharp.fluid.src} />
        <span>{image.title}</span>
        </div>
        )
    })
}
};

export default NewsImages;