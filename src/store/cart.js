import { observable, computed, action } from 'mobx';

class Cart {
    @observable products = getProducts()

    @computed get changeOn() {
        return this.products.map((product, i) => { // возвращает массив функций, где каждая умеет изменять cnt
            return (cnt) => this.change(i, cnt); // и видит i по замыканию
        });
    }

    @computed get total() {
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0); // - к тоталу плюсуем pr.price * pr.current
    }

    @action change(i, cnt) {
        this.products[i].current = cnt;
    }

    @action remove(i) {
        this.products.splice(i, 1);
    }
}

export default new Cart();

function getProducts() {
    return [
        {
            id: 100,
            title: 'Iphone x',
            price: 58999,
            rest: 54,
            current: 1,
        },

        {
            id: 101,
            title: 'Iphone 8',
            price: 39900,
            rest: 15,
            current: 1,
        },

        {
            id: 140,
            title: 'Iphone 9',
            price: 48990,
            rest: 54,
            current: 1,
        },

        {
            id: 108,
            title: 'Iphone 7',
            price: 35900,
            rest: 7,
            current: 1,
        },

        {
            id: 105,
            title: 'Iphone 5',
            price: 15370,
            rest: 4,
            current: 1,
        },

        {
            id: 109,
            title: 'Iphone 6',
            price: 19500,
            rest: 30,
            current: 1,
        },

    ]
}