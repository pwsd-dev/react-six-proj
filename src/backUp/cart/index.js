import React from 'react';
import PropTypes from 'prop-types';
import InputForApp from '@c/inputs/inputForApp/inputForApp.js'

import cartModel from '@s/cart.js'


export default class extends React.Component {
    static propTypes = {
        // products: PropTypes.array.isRequired,
        onSend: PropTypes.func.isRequired,
        // onChange: PropTypes.func.isRequired,
        // onRemove: PropTypes.func.isRequired,
    }

    render() {

        // let total = this.props.products.reduce((t, pr) => {
        //     return t + (pr.current * pr.price);
        // }, 0);

        let productRows = cartModel.products.map((product, i) => { // - i здесь , это номер итерации, я же могу и три раза добавить

            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <InputForApp min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => cartModel.change(i, cnt)} // - i здесь , это номер итерации, я же могу и три раза добавить
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => cartModel.remove(i)}>x</button>
                    </td>
                </tr>
                // - в кнопке выше i прописана, для того чтобы для каждой строки , то есть для каждого объекта, была своя кнопка
            );
        });

        return (
            <div>
                <h2>Выберите модель</h2>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                        {productRows}
                        <h2> Total: {cartModel.total}</h2>
                        <hr />
                        <button className="btn btn-primary" onClick={this.props.onSend}>Send</button>

                    </tbody>
                </table>
            </div>
        );

    }
}