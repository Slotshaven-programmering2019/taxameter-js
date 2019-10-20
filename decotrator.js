class TaxameterDecorator {

    constructor(Taxameter){
        this.taxameter = Taxameter;
    }

    getStartetTidspunkt() {
        return this.taxameter.getStartetTidspunkt();
    }

    get afstand(){
      return this.taxameter.afstand();

    }
    startTur() {
      const tur = this.taxameter.startTur();
        console.log("Nu køre Valdemar");
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