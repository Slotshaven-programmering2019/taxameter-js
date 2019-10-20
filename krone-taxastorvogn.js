
class RealClock{
    now(){
        return new Date();
    }
}

class FakeClock{
    constructor(){
        this.time = new Date();
    }
    
    now(){
        return this.time;
    } 

    forward(minutter){
        this.time.setMinutes(this.time.getMinutes()+ minutter)
    }

    
}

class kronetaxastorvogn{
    calulatePrice(afstand, tidgaaet){
        return (12*(afstand)) + (6.67*tidgaaet + 69)
    }
}

var clock = new RealClock();
const taxameter = new Taxameter(clock, new kronetaxastorvogn);
const Decoator1 = new TaxameterDecorator(taxameter);
const decoator2 = new taxameterDecoratortæller(Decoator1);
start(decoator2);