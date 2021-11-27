// Ex 04 Task 5

class PaymentMethod {
    getAmount() {
        return "Your amount in the account is: ";
    }
}


class CashMethod extends PaymentMethod {
    constructor() 
    {
        super()
        var _amount = 0
        this.getCashAmount = function() { return _amount}
        this.setCashAmount = function(newAmount) { _amount = newAmount}
    }
    
    addToAmount(addAmount)
    {
        this.setCashAmount(this.getCashAmount() + addAmount)
        return this
    }

    reduceFromAmount(reduceAmount)
    {
        this.setCashAmount(this.getCashAmount() - reduceAmount)
        return this
    }

    getAmount() 
    {
        return super.getAmount() + this.getCashAmount()
    }
}

class CreditMethod extends PaymentMethod {
    constructor() 
    {
        super()
        var _amount = 0
        this.getCashAmount = function() { return _amount}
        this.setCashAmount = function(newAmount) { _amount = newAmount}
    }
    
    addToAmount(addAmount)
    {
        this.setCashAmount(this.getCashAmount() + addAmount*0.9)
        return this
    }

    reduceFromAmount(reduceAmount)
    {
        this.setCashAmount(this.getCashAmount() - reduceAmount)
        return this
    }

    getAmount() 
    {
        return super.getAmount() + this.getCashAmount()
    }
}



var someMethod = new PaymentMethod
console.log(someMethod.getAmount())

var myCashAcc = new CashMethod()
console.log(myCashAcc.getAmount())

myCashAcc.addToAmount(5000)
console.log(myCashAcc.getAmount())

myCashAcc.reduceFromAmount(50)
console.log(myCashAcc.getAmount())

myCashAcc.addToAmount(20).addToAmount(30).reduceFromAmount(10)
console.log(myCashAcc.getAmount())

var myCreditAcc = new CreditMethod()
myCreditAcc.addToAmount(100)
console.log(myCreditAcc.getAmount())