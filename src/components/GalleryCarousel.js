import React, { useState } from 'react'
import axios from 'axios'
import { Carousel,
         CarouselItem,
         CarouselControl,
         CarouselIndicators,
         CarouselCaption 
        } from 'reactstrap'

import { galleryPhotos } from '../images/galleryPhotos'

const GalleryCarousel = () => {
    const [galleryPictures, setGalleryPictures] = useState(galleryPhotos)
    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    return (
        <div></div>
    )
}

export default GalleryCarousel