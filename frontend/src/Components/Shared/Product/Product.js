import React from 'react'
import Card from '../../../UIElemets/Card/Card';

const Product = ({product}) => {
    return (
        <Card>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
        </Card>
    )
}

export default Product;
