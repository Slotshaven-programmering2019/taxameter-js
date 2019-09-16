/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */
class kronetaxaPriceStrategy{


    calculatePrice(from, to){
        const time = (to - from);
        const kmalt = ((time/60)*50);
        return (8.50*kmalt) + (6.25*time) + 39;
    }
}

class RealClock{
    now(){
        return new Date();
    }
}

class fakeclock{
    constructor(){
        this.time = new Date()
    }
    
    now(){
        return new Date(this.time.getTime());
    } 

    forward(minutter){
        this.time.setMinutes(this.time.getMinutes()+ minutter)
    }

    
}

    var clock = new RealClock();
    start(new Taxameter(new RealClock(), new kronetaxaPriceStrategy()));
    //start(new Taxameter(new kronetaxaPriceStrategy))
