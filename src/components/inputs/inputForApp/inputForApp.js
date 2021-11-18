import React from 'react';
import PropTypes from 'prop-types';
import InputLazy from '../inputLazy/inputLazy.js';
import styles from './style.module.css';


export default class extends React.Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func,
    };

    lazyInput = React.createRef()

    static defaultProps = {
        onChange: function (cnt) { }
    }

    increase = () => {
        this.set(this.props.cnt + 1);
    }

    increaseMinus = () => {
        this.set(this.props.cnt - 1);
    }

    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max); // Общая проверка по границам чисел
        this.props.onChange(cnt);
        return cnt;
        // то что здесь есть props, означает, что в родителе 
        // может быть функция , которая принимает в себя cnt

    }

    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt)

        if (realCnt.toString() !== e.target.value) {// если не равен то что-то поменяли не подходящее по условиям 
            console.log('HARD SET VALUE')
            this.lazyInput.current.setValue(realCnt);// то принудительно обновляется состояние компонента и ставит пересчитанный cnt
        }

        this.set(cnt);

        // console.log(e.target.value);
    }

    applyValue = () => {
        let cnt = parseInt(this.props.cnt);

        // this.setState(isNan(cnt) ? this.props.min : cnt); // тернарный оператор здесь более лаконичен

        if (isNaN(cnt)) {
            cnt = this.props.min // но для наглядности показал, что ветвление тоже работает
        }

        this.set(cnt);
    }

    checkEnter = (e) => {
        if (e.keyCode === 13) {
            this.applyValue();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.increaseMinus}>minus 1</button>
                <InputLazy
                    nativeProps={{ className: styles.input }}
                    value={this.props.cnt}
                    onChange={this.onChange}
                    ref={this.lazyInput}
                />
                <button onClick={this.increase}>plus 1</button>
            </div>
        )
    }


}