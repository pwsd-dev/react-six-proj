import { observable, computed, action } from 'mobx';

class Order {
    @observable formData = {
        name: {
            value: '',
            label: 'Name',
            validator: val => /^[aA-zZ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null,
        },
        phone: {
            value: '',
            label: 'Phone',
            validator: val => /^[0-8]{7,15}$/.test(val),
            errorText: 'От 7 до 15 цифр',
            valid: null,
        },
        email: {
            validator: val => /^.+@.+$/.test(val),
            value: '',
            label: 'Ваш e-mail',
            errorText: 'добавьте @',
            valid: null,
        },
    }

    @computed get formValid() {
        return Object.values(this.formData).every(field => field.valid); // Возвращает массив с объектами, и после валидирует методом every
    }

    @computed get data() {
        let data = {};

        for (let name in this.formData) {
            data[name] = this.formData[name].value;
        }

        return data;
    }

    @action change(key, value) { // принимает ключ и значение
        let field = this.formData[key];
        field.value = value;
        field.valid = field.validator(field.value);
    }


}

export default new Order();
