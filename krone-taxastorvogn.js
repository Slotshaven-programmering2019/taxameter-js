
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
start(new Taxameter(clock,new kronetaxastorvogn()));