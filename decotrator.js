class TaxameterDecorator {

    constructor(Taxameter){
        this.taxameter = Taxameter;
    }

    getStartetTidspunkt() {
        return this.taxameter.getStartetTidspunkt();
    }

    startTur() {
        console.log("Nu køre Valdemar")
       return this.taxameter.startTur();
      
    }

    slutTur() {
        console.log("Nu er Valdemar tilbage")
      return this.taxameter.slutTur()
    }

    koer(delta_afst) {
      return this.taxameter.koer();
    }

    beregnPris() {
      return this.taxameter.beregnPris();
       
    }
}