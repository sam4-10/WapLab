class Bank{
    static nextNumber=1;
    constructor(){
        this.account=[];
        
    }


    addAccount(){
        this.account.push(new Account(Bank.nextNumber));
        return Bank.nextNumber++;
    } 

    addSavingsAccount(interest){
        let save=new Savingsaccount(Bank.nextNumber);
        save.deposit(1000);
       
        if(!interest){
            save.setInterest(interest);
        }
        this.account.push(save);
        return Bank.nextNumber++;

    }

    addCheckingAccount(overdraft) {
        let check=new CheckingAccount(this.nextNumber);

        check.deposit(100);
        if(!overdraft){
            check.setOverdraft(overdraft);
        }
        this.account.push(check);
        return Bank.nextNumber++;

    }

    closeAccount(number){
        delete this.account[number];
        return number;
    }

    accountReport(){
        for(let i=0; i<this.account.length;i++){
            console.log(this.account[i].toString());
        }
    }

    endOfMonth(){
       
        for(let i=0; i<this.account.length; i++){
            
            console.log(this.account[i].endOfMonth());
        }
                          
    }

    toString(){
        return "Accounts"+this.account;
    }
}






