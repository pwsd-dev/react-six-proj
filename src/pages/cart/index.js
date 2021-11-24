import React from 'react';
import PropTypes from 'prop-types';
import InputForApp from '../../components/inputs/inputForApp/inputForApp.js';

import cartModel from '../../store/cart';
import router from '../../store/router';

import { observer } from 'mobx-react';

@observer class Cart extends React.Component {
    nextStep() {
        router.moveTo('order');
    }

    render() {
        console.log(cartModel);

        let productRows = cartModel.products.map((product, i) => { // - i здесь , это номер итерации, я же могу и три раза добавить

            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <InputForApp min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={cartModel.changeOn[i]} // (cnt) => cartModel.change(i, cnt) - i здесь , это номер итерации, я же могу и три раза добавить
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
                        {/* <button className="btn btn-primary" onClick={() => router.moveTo('order')}>Send</button> */}
                        <button className="btn btn-primary" onClick={this.nextStep}>Send</button>

                    </tbody>
                </table>
            </div>

        );

    }
}


export default Cart;