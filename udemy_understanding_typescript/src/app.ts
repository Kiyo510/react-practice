type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmploee = Admin & Employee;

const e1: ElevatedEmploee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const fetchUserData = {
  id: 'u1',
  name: 'John',
  job: {
    title: 'hoge',
    description: 'nanika',
  },
};

console.log(fetchUserData?.job?.title);

const userInput = '';

const storeData = userInput ?? 'DEFAULT';
console.log(storeData);

type UnkownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkownEmployee) {
  console.log(emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('車を運転中う');
  }
}

class Truck {
  drive() {
    console.log('トラックを運転中');
  }

  loadCargo(load: number) {
    console.log('荷物の重さは' + load + 'kgです。');
  }
}

type Viecle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function outputViecleInfo(viecle: Viecle) {
  viecle.drive();
  if (viecle instanceof Truck) {
    viecle.loadCargo(1000);
  }
}

outputViecleInfo(v1);
outputViecleInfo(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;

  switch (animal.type) {
    case 'bird':
          speed = animal.flyingSpeed;
      break;
      case 'horse':
          speed = animal.runningSpeed;
          break;
  }
  console.log('移動速度' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 500})

// const userInputElement = <HTMLInputElement>document.getElementById('message-output');
const userInputElement = document.getElementById('message-output') as HTMLInputElement;

userInputElement.value = 'こんにちは';
