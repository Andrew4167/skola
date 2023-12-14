class Student {

    constructor(studenti, znamky, vek) {
        this.studenti = studenti;
        this.znamky = znamky;
        this.vek = vek;
    }
    
    vypisInfoOFirme() {
        document.write("Firma " + this.nazev + " sídlí v " + this.sidlo);
    }
}