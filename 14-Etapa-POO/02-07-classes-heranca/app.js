class Mammal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
    this.mammaryGland = true;
  }
}

class Lion extends Mammal {
  constructor(species, name, manEater) {
    super(species, name);
    this.manEater = manEater;
  }
  eatZebras(animals) {
    return animals.filter((animal) => animal.species !== 'zebra');
  }
}

const zeca = new Mammal('zebra', 'zeca');
const marcos = new Mammal('macaco', 'marcos');
const joana = new Mammal('cavalo', 'joana');

const mufasa = new Lion('leão', 'mufasa', false);

const animals = [zeca, marcos, joana];

console.log(mufasa);
