import React from 'react';
import ProductItem from '../ProductItem';

const ProductList = () => {
    
    const items = [
        {
            nome: 'Product 1',
            valor: 10
        },
        {
            nome: 'Product 2',
            valor: 660
        },
        {
            nome: 'Product 3',
            valor: 50
        }
    ];

    return (
        <div className='flex justify-center'>
            <ul>
                {this.items.map}
                <li><ProductItem /></li>
            </ul>
        </div>
    );
}