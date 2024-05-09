import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './styles/prodSlider.css'

const ProdSlider = ({ product }) => {

    console.log(product)

    return (
        <Splide
            options={{
                rewind: true,
                gap: '1rem',
            }}
            aria-label="My Favorite Images"
        >
            {
                product?.images.map(img => (
                    <SplideSlide key={img.id}>
                        <img src={img.url} alt="prod image" />
                    </SplideSlide>
                ))
            }
        </Splide>
    )
}

export default ProdSlider