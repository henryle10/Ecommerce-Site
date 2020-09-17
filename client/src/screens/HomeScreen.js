import React from 'react';
import Carousel from '../components/Carousel';
import ProductRow from '../components/ProductRow'


const HomeScreen = props => {
    return (
        <div className="mt-1">
            <Carousel />
            <ProductRow />
            <hr />
        </div>
    )
}

export default HomeScreen;