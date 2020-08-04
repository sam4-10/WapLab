


describe("Account Test", function(){
    let acc=new Account(1);
    
   
    it("Testing getNumber of Account", function(){
        assert.equal(100, new Account(100).getNumber());
    });

    it("Testing deposit of Account ", function(){
        acc.deposit(300);
        assert.equal(300, acc.getBalance());
        
    });

    it("Testing with draw and getBalance of Account", function(){
        acc.withdraw(100);
        assert.equal(200, acc.getBalance());
        
    });
        
});








describe("Saving Account Test", function(){

    let saving=new Savingsaccount(2);

    it("Testing getInterest of SavingAccount", function(){
        assert.equal(5, saving.getInterest());
    });

    it("Testing setInterest of SavingAccount", function(){
        saving.setInterest(7);
        assert.equal(7, saving.getInterest());
    });

    it("Testing addInterest of SavingAccount", function(){
        saving.deposit(250);
        saving.addInterest();

        assert.equal(267.5, saving.getBalance());
    });

    it("Testing endOfMonth of SavingAccount", function(){
        assert.equal("Interest added SavingsAccount:"+ saving.getNumber() +" balance: "+ saving.getBalance() +"interest:"+ (saving.getBalance() * saving._interest / 100),saving.endOfMonth());
    });
})








describe("Checking Account Test", function(){

    let checking=new CheckingAccount(3);

    it("Testing getOverdraft of CheckingAccount", function(){
        
        assert.equal(500, checking.getOverdraft());
    });

    it("Testing setOverdraft of CheckingAccount", function(){
        checking.setOverdraft(750);
        checking.withdraw(500); 
        assert.equal(250, checking.getOverdraft());
    });

    it("Testing endOfMonth of CheckingAccount", function(){
               
        assert.equal("Warning, low balance CheckingAccount: "+ checking.getNumber() +"balance: "+ checking.getBalance()+" overdraft limit:"+checking._overdraft, checking.endOfMonth());
    });

})








describe("Bank  Test", function(){
    
    let bank=new Bank();

    it("Testing addAccount of Bank", function(){
               
        assert.equal(1, bank.addAccount());
    });

    it("Testing addSavingsAccount of Bank", function(){
               
        assert.equal(2, bank.addSavingsAccount(6));
    });

    it("Testing addCheckingAccount of Bank", function(){
               
        assert.equal(3, bank.addCheckingAccount(650));
    });
    
    it("Testing closeAccount of Bank", function(){
               
        assert.equal(2, bank.closeAccount(2));
    });
})