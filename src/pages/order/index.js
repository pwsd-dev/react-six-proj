import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Modal } from 'react-bootstrap';
import styles from './order.module.css';//./order.module.css'

import { observer } from 'mobx-react';
import router from '../../store/router';
import orderModel from '../../store/order'
import cartModel from '../../store/cart';

@observer class Result extends React.Component {

    state = {
        showModal: false,
    }

    show = () => {
        this.setState({ showModal: true });

    }

    hide = () => {
        this.setState({ showModal: false });
    }

    confirm = () => {
        this.hide();
        router.moveTo('result')

    }

    render() {
        let formFields = [];

        for (let name in orderModel.formData) {
            let field = orderModel.formData[name] // - ссылка на объект, копируются все ключи объекта

            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                        type="text"
                        value={field.value} // value здесь значит переданное в инпут значение 
                        onChange={(e) => orderModel.change(name, e.target.value)} // без name будет работать некорректно
                    />
                    {field.valid === null || field.valid ? '' :
                        <Form.Text className="text-muted">
                            {field.errorText}
                        </Form.Text>
                    }

                </Form.Group>
            )
        }

        return (
            <div >
                <h2>order</h2>
                <hr />
                <Form>
                    {formFields}
                </Form>
                <hr />
                <Button
                    // variant="primary"
                    className={styles.margin}
                    onClick={() => router.moveTo('cart')}

                >Back
                </Button>
                <Button
                    variant="warning" // - сначала показывается модальное окно перед третьим шагом
                    onClick={this.show}
                // disabled={!orderModel.formValid}
                >Apply order
                </Button>
                <Modal show={this.state.showModal}
                    backdrop="static"
                    onHide={this.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Проверьте информацию</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Total: {cartModel.total}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={() => router.moveTo('result')}>
                            Сохранить изменения
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
}

export default Result;


