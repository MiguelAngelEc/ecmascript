function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Oscar", "David", "Ana", "Juan"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next());

function* getId() {
  while (true) {
    yield Math.random().toString(36).substring(5).toUpperCase();
  }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
