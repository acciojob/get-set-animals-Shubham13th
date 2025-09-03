class Animal {
            constructor(species) {
                this._species = species;
            }

            get species() {
                return this._species;
            }

            set species(value) {
                this._species = value;
            }

            makeSound() {
                console.log(`The ${this._species} makes a sound.`);
            }
        }

        class Dog extends Animal {
            bark() {
                console.log("woof");

            }
        }

        class Cat extends Animal {

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
