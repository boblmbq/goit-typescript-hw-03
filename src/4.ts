class Key {
  private readonly signature = Math.random();

  get getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  get getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    } else {
      alert("the door is closed, open the door to invite the tenant");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key) {
    if (key.getSignature === this.key.getSignature) {
      this.door = true;
    }
  }
  closeDoor() {
    if (this.door) {
      this.door = false;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey);

house.comeIn(person);

house.closeDoor();

export {};
