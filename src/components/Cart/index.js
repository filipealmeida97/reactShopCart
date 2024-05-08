import React from 'react';

const Cart = (props) => {

    return (
        <div className='grid grid-rows-2 justify-center'>
            <table>
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                        <tr>
                            <th className="p-2">
                                <div className="text-left font-semibold">Product Name</div>
                            </th>
                            <th className="p-2">
                                <div className="text-left font-semibold">Valor</div>
                            </th>
                        </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
                {props.items.length > 0 && 
                    props.items.map(value  => 
                        <tr key={value.name}>
                            <td className='p-2'>
                                <p className='font-medium text-gray-800'>{value.name}</p>
                            </td>
                            <td className="p-2">
                                <div className="text-left font-medium text-green-500">{value.price}</div>
                            </td>
                        </tr>)
                }
            </tbody>
            </table>
            {/* <!-- total amount --> */}
            <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
                <div>Total</div>
                <div className="text-blue-600">R$ <span x-text="total.toFixed(2)">{props.amount}</span></div>
            </div>
        </div>
    );
}

export default Cart;