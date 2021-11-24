import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';

import cartModel from '../../store/cart';
import orderModel from '../../store/order';


@observer export default class extends React.Component {

    render() {

        return (
            <div>
                {/* <h2>Поздравляем, {orderModel.formData.name.value}!</h2> */}
                <h2>Поздравляем, {orderModel.data.name}!</h2>
                <p>Ваша покупка оплачена</p>
                <p><strong>Total: {cartModel.total}</strong></p>
            </div>
        )
    }
}