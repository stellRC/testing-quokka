const resultDiv = document.querySelector('.result')

const someOrder = {
    items: [
        { name: 'Dragon food', price: 8, quantity: 8 },
        { name: 'Dragon cage (small)', price: 800, quantity: 2 },
        { name: 'shipping', price: 40, shipping: true }
    ]
}

const orderTotal = order => {
    const totalItems = order.items
        // filter items before summing only items that aren't shippig items with reduce
        .filter(x => !x.shipping)
        .reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
    const shippingItem =
        order.items.find(x => !!x.shipping)
    const shipping = 
        // shipping is free if over 1000
        totalItems > 1000 ? 0 : shippingItem.price
    return totalItems + shipping
}

result = orderTotal(someOrder)

resultDiv.innerHTML = result; 