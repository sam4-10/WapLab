class Savingsaccount extends Account{
    constructor(number){
        super(number);
        this._interest=5.0;
    }

    getInterest(){
        return this._interest;
    }
    
    setInterest(interest){
        this._interest=interest;
    }

    addInterest(){
        super.deposit(super.getBalance() * this._interest / 100);
    }
    

    endOfMonth() {
       
        return "Interest added SavingsAccount:"+ super.getNumber() +" balance: "+ super.getBalance() +"interest:"+ (super.getBalance() * this._interest / 100);
        
    }

    toString() {
        return "Account " + super.number + ": interest " + this._interest;
    }

}