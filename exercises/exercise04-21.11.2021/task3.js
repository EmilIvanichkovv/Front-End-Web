// Ex 04 Task 3
class Item {
    constructor(name, discount)
    {
        this.name = name
        this.discount = discount
    }
    getPrice()
    {
        console.log(Item.prototype.price - Item.prototype.price*this.discount/100)
    }
}

Item.prototype.price = 1000

const table = new Item ("FourLeggedCoolTable", 40)
console.log(table)
table.getPrice()