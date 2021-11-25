import { observable, computed, action } from 'mobx';

import React from 'react';
import Cart from '../pages/cart'
import Order from '../pages/order'
import Result from '../pages/result'

class Router {

    routes = {
        cart: () => <Cart />,
        order: () => <Order />,
        result: () => <Result />,
    }

    @computed get component() {
        // проверка есть ли роут в списке6 если нет => p404

        return this.routes[this.activeRoute](); // в конце стоят (), потому что сначала возвращает функцию и ее запускает
        //      () => <Cart />, вместо этой строки возвращает эту функцию и выполняет
    }

    @observable activeRoute = 'cart'

    @action moveTo(route) {
        // проверка есть ли роут в списке
        this.activeRoute = route;// устанавливает route в какую-то позицию

    }
}

export default new Router();






















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