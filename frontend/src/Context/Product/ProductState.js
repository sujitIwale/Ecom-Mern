import React , { useReducer } from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import {} from '../types';

const ProductState = (props) => {
    const initialState = {
        products: [
            {
                id:1,
                name:'product 1',
                type:'electronics',
                price:3000,
                imageUrl:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/phase_3_CC/Desltop_CC/Revised/DesktopGateway_CategoryCard_379X304-2x._SY304_CB418067982_.jpg'
            },
            {
                id:2,
                name:'product 1',
                type:'electronics',
                price:3000,
                imageUrl:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/phase_3_CC/Desltop_CC/Revised/DesktopGateway_CategoryCard_379X304-2x._SY304_CB418067982_.jpg'
            },
            {
                id:3,
                name:'product 1',
                type:'electronics',
                price:3000,
                imageUrl:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/phase_3_CC/Desltop_CC/Revised/DesktopGateway_CategoryCard_379X304-2x._SY304_CB418067982_.jpg'
            },{
                id:4,
                name:'product 1',
                type:'electronics',
                price:3000,
                imageUrl:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/phase_3_CC/Desltop_CC/Revised/DesktopGateway_CategoryCard_379X304-2x._SY304_CB418067982_.jpg'
            },{
                id:5,
                name:'product 1',
                type:'electronics',
                price:3000,
                imageUrl:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/phase_3_CC/Desltop_CC/Revised/DesktopGateway_CategoryCard_379X304-2x._SY304_CB418067982_.jpg'
            },
            {
                id:6,
                name:'product 1',
                type:'electronics',
                price:3000,
                imageUrl:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/phase_3_CC/Desltop_CC/Revised/DesktopGateway_CategoryCard_379X304-2x._SY304_CB418067982_.jpg'
            }
        ],
    }
    const [state, dispatch] = useReducer(ProductReducer, initialState)
    

    return (
        <ProductContext.Provider 
          value={{
                  products: state.products
              }}
        >
            {props.children}
        </ProductContext.Provider>
        
    )
}

export default ProductState;
