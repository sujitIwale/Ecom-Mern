import React,{Fragment, useContext} from 'react'
import ProductContext from '../../../Context/Product/ProductContext'
import Product from '../Product/Product';

const ProductList = () => {
    const productContext  = useContext(ProductContext);
    const {products} = productContext;
    
    return (
        <Fragment>
            <h1 className='productList__title'>{products[0].type}</h1>
            <div className='flex'>
            
                {products.map(product =>(
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </Fragment>
    )
}

export default ProductList
