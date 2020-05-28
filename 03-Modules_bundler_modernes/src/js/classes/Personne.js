class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    presentation() {
        return `Bonjour, mon nom c'est ${this.nom} et j'ai ${this.age} ans.`;
    }
}

export default Personne;