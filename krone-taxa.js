
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
        var price = (9*(afstand-1));
        var under1km = (5*Math.min(1, afstand));
        var tidpris = (6.25*tidgaaet + 39);
        

        return price + under1km + tidpris;
    }
}

var clock = new RealClock();
start(new Taxameter(clock,new kronetaxavogn()));