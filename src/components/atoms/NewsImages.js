import React from 'react';

const NewsImages = (images) => {
    // console.log(images.images);
    return images.images.map( pic =>{
                return <img src={pic} />
            });
};

export default NewsImages;