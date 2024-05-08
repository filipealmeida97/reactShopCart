import React from 'react';
import ProductItem from '../ProductItem';

const ProductList = (props) => {
    
    const items = [
        {
            name: 'Product 1',
            price: 10
        },
        {
            name: 'Product 2',
            price: 660
        },
        {
            name: 'Product 3',
            price: 50
        }
    ];

    return (
        <div className='grid gird-rows-2 justify-center'>
            <h1 className='text-center font-mono font-bold text-2xl'> {props.title}</h1>
            <ul>
                {items.map( item => 
                    <li key={item.name} >
                        <ProductItem 
                            name={item.name} 
                            price={item.price}
                            item={values => props.productSelect({name:values.name, price:values.price})}
                        />
                    </li>)}
            </ul>
            <hr/>
        </div>
    );
}

export default ProductList;