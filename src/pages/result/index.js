import React from 'react';
import PropTypes from 'prop-types';
import cartModel from '../../store/cart';
import { observer } from 'mobx-react';


@observer export default class extends React.Component {

    render() {

        return (
            <div>
                <h2>Congratulations!</h2>
                <p><strong>Total: {cartModel.total}</strong></p>
            </div>
        )
    }
}