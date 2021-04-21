document.querySelector('header > h1').innerText = 'Pizza Emporium';
document.querySelector('header > h2').innerText = 'Literal Objects';

pizza = {
    crust: 'thin',
    topping: 'pepperoni',
    size: 'small',
    buildPizza: function() {
        document.querySelector('#feedback').innerText = `We are baking a ${pizza.size} ${pizza.topping} pizza on ${pizza.crust} crust for you`;
    },
    shoppingList: function() {
        var flour = 0;
        if(pizza.crust == 'thin') {
            flour = 1;
        }
        else if(pizza.crust == 'thick') {
            flour = 2;
        }
        if(pizza.size == 'large') {
            flour *= 2;
        }
        document.querySelector('#feedback').innerText = `You will need to pick up ${flour} lb(s) of flour and 1 cup of ${pizza.topping}`;
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin');
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick');
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage');
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni');
document.querySelector('#small').addEventListener('click', () => pizza.size = 'small');
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large');

document.querySelector('#build').addEventListener('click', pizza.buildPizza);
document.querySelector('#shop').addEventListener('click', pizza.shoppingList);
