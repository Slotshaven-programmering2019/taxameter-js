
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

class CityDec {
    constructor (taxameter) {
        this.taxameter = taxameter;
    }

    getStartetTidspunkt() {
        return this.taxameter.getStartetTidspunkt();
    }

    get afstand() {
        return this.taxameter.afstand;
    }

    startTur() {
        return this.taxameter.startTur();
    }

    get minimumAfstandTilbage() {
        return 2 - this.afstand;
    }

    slutTur() {
        if (this.afstand < 2) {
            alert(`Kør længere taber, min 2 km, du manger ${this.minimumAfstandTilbage} km`);
        }else{
            return this.taxameter.slutTur();
        }
    }

    koer(delta_afst) {
        return this.taxameter.koer(delta_afst);
    }

    beregnPris() {
        return this.taxameter.beregnPris();
    }
}

var clock = new RealClock();
const taxameter = new Taxameter(clock, new citybilenvogn);
const Decoator3 = new CityDec(taxameter);
start(Decoator3);
