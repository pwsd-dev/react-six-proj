import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object,
    };

    static defaultProps = {
        onChange: function (cnt) { },
        nativeProps: {},
    }

    nativeInput = React.createRef(); // ref, который используется ниже;

    componentDidUpdate(prevProps, prevState) {  // при нажатии на кпонки этот компонент сообщает, что состояние обновилось , без него при нажатии на кнопки обновления не будет, то есть по нажатии плюс будет оставаться 1, а не становиться 2
        // console.log(this.nativeInput)
        let inp = this.nativeInput.current; // у nativeInput есть ключ current , проверить это можно строкой выше
        if (prevProps.value !== this.props.value ||
            this.props.value != inp.value // эту проверку можно делать только если нет внутреннего state
        ) {
            inp.value = this.props.value // обновляет значение в инпуте start и start other становятся test1 и test 2
        };
    }

    setValue(value) {
        this.nativeInput.current.value = value;
    }

    checkChange = (e) => {
        if (this.props.value.toString() !== e.target.value) {
            // console.log("1")
            this.props.onChange(e);
        }
    }

    checkEnter = (e) => {
        if (e.keyCode === 13) {
            this.checkChange(e);

        }
    }

    render() {
        return (
            <input {...this.props.nativeProps}
                defaultValue={this.props.value}
                onBlur={this.checkChange}
                onKeyUp={this.checkEnter}
                ref={this.nativeInput}// реф позволяет получить доступ к инпуту
            />
        )
    }
}