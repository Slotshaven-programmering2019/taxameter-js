
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

class kronetaxavogn{
    calulatePrice(afstand, tidgaaet){
        return (8.50*(afstand)) + (6.25*tidgaaet + 39)
    }
}

var clock = new RealClock();
start(new Taxameter(clock,new kronetaxavogn()));