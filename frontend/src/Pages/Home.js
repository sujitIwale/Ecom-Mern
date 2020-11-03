import React from 'react'
import CategoryBar from '../Components/Categories/CategoryBar'
import ImageSwiper from '../Components/ImageSlider/ImageSlider'
import ProductList from '../Components/Shared/ProductList/ProductList'

const Home = () => {
    return (
        <div>
            <CategoryBar />
            <ImageSwiper />
            <ProductList />
        </div>
    )
}

export default Home
