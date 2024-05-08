import React from 'react';

const ProductItem = (props) => {

    const addItem = () => {
        props.item({name: props.name, price: props.price});
    }

    return (
        <div className='grid grid-cols-2 col-auto items-baseline auto-cols-min p-2 m-2 border-solid rounded-md border-2 border-gray-300'>
            <div className='inline-flex items-baseline'>
                <div className='rounded-md bg-slate-300 py-8 min-w-24 text-center'>50x50</div>
                <h2 className='font-sans text-left p-2'>{props.name}</h2>
            </div>
            <div className='text-right'>
                <button className='p-4 border-solid rounded-md text-white bg-red-600' onClick={addItem}>Adicionar R${props.price}</button>
            </div>
        </div>
    );
}

export default ProductItem;