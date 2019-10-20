/**
 * Skal have følgende felter
 * - turStartetTidspunkt: et dato objekt for hvornår turen er startet. 
 *   Hvis turen ikke er startet, er den undefined
 * - afstand: hvor langt taxaen har kørt i KM. Denne værdi sendes til scriptet
 *   udefra (i dette tilfælde fra funktionen start(Taxameter), som ligger i 
 *   library-mappen, og som er det script, der styrer applikationen).
 * 
 * Skal have følgende metoder/funktioner, som alle kaldes fra start.js
 * - startTur(): sætter turStartetTidspunkt til nuværende tidspunkt
 * - slutTur(): skal nulstille taxameteret 
 *   ved at  sætte turStartetTidspunkt til undefined og afstand til 0
 * - koer(delta_afst): skal tælle afstand op med det ekstra antal km, som
 *   bilen har kørt siden sidste beregning. 
 * - beregnPris(): skal returnere prisen beregnet udfra taxaselskabets prissætning
 */
class Taxameter {

    constructor(clock, priceStrategy) {
        this.afstand = 0;
        this.priceStrategy = priceStrategy;
        this.calulatePrice = priceStrategy.calulatePrice;
        this.turStartetTidspunkt = undefined;
        this.clock = clock;
    } 

    getStartetTidspunkt() {
        return this.turStartetTidspunkt;
    }

    startTur() {
        this.turStartetTidspunkt = new Date();
      
    }

    slutTur() {
      this.afstand = 0;
      this.turStartettidpunkt = undefined;
    }

    koer(delta_afst) {
       this.afstand+=delta_afst*5;
    }

    beregnPris() {
       if (this.turStartetTidspunkt == undefined){
           return 0;
       } else {
           var tidgaaet = (((this.clock.now()-this.turStartetTidspunkt)/1000)/60)
           return this.calulatePrice(this.afstand, tidgaaet);
       }
       
    }
}

class TaxameterDecorator {

    constructor(Taxameter){
        this.taxameter = Taxameter;
        this.koerer = "Marinus"
    }

    getStartetTidspunkt() {
        return this.taxameter.getStartetTidspunkt();
    }

  /*  get afstand(){
      return this.taxameter.afstand();

    }*/
    startTur() {
      const tur = this.taxameter.startTur();
        console.log('Nu køre ${this.koerer}');
       return tur;
      
    }

    slutTur() {
      const tur = this.taxameter.slutTur();
        console.log("Nu er Valdemar tilbage");
      return tur;
    }

    koer(delta_afst) {
      return this.taxameter.koer(delta_afst);
    }

    beregnPris() {
      return this.taxameter.beregnPris();
       
    }
}

class taxameterDecoratortæller {
  constructor (taxameter) {
      this.taxameter = taxameter;
      this.Kort = 0;
      this.Lang = 0;
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

  get procentKorteTure(){
      return (this.Kort/(this.Kort + this.Lang))*100;
  }
  get procentLangeTure(){
      return (this.Lang/(this.Kort + this.Lang))*100;
  }

  slutTur() {
      if (this.afstand < 1){
          this.Kort += 1;
      }else{
          this.Lang += 1;
      }
      console.log(this.procentKorteTure + "% ture er < 1 km");
      console.log(this.procentLangeTure + "% ture er > 1 km");
      return this.taxameter.slutTur();
  }

  koer(delta_afst) {
      return this.taxameter.koer(delta_afst);
  }

  beregnPris() {
      return this.taxameter.beregnPris();
  }
}