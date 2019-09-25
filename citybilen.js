
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

class citybilenvogn{
    calulatePrice(afstand, tidgaaet){
        var price = (4.50*(afstand)) + (7*tidgaaet);
        if (price < 75){
            return 75;
        } else {
            return price;
        }
    }
}

var clock = new RealClock();
start(new Taxameter(clock,new citybilenvogn()));