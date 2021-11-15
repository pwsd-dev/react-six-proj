import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Modal } from 'react-bootstrap';
import styles from './order.module.css';
import router from '../../store/router';
import { observer } from 'mobx-react';
// import './order.module.css';

@observer class Result extends React.Component {
    static propTypes = {
        formData: PropTypes.object.isRequired,
        onSend: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

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
        this.props.onSend(); // передается колбэк после которого, в родителя приходит onSend и переходит на result
    }

    render() {
        let formFields = [];

        for (let name in this.props.formData) {
            let field = this.props.formData[name] // - ссылка на объект, копиоуются все ключи объекта

            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                        type="text"
                        value={field.value} // value здесь значит переданное в инпут значение 
                        onChange={(e) => this.props.onChange(name, e.target.value)} // без name будет работать некорректно
                    />
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
                    variant="primary"
                    className={styles.margin}
                    onClick={() => router.moveTo('cart')}

                >Back
                </Button>
                <Button
                    variant="warning" // - сначала показывается модальное окно перед третьим шагом
                    onClick={this.show}>Apply order
                </Button>
                <Modal show={this.state.showModal}
                    backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Проверьте информацию</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Вы подтверждаете свою информацию?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={() => router.moveTo('result')}>
                            Сохранить изменения
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Result;


