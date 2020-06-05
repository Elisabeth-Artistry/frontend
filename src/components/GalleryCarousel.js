import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Carousel,
         CarouselItem,
         CarouselControl,
         CarouselIndicators,
         CarouselCaption 
        } from 'reactstrap'

const GalleryCarousel = () => {
    const [galleryPictures, setGalleryPictures] = useState({})
    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        axios
            .get('https://res.cloudinary.com/dwxkvhdoj/image/upload/v1591336291/elisabethArtistry/')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div></div>
    )
}

export default GalleryCarousel