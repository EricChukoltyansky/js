const people = ["Greg", "Mary", "Devon" ,"James"];

// 1 
for(let i of people) {
    console.log(i)
}

// 2
let removedElem = people.shift("Greg");
console.log(removedElem)

// 3
let removedElem2 = people.pop("James");
console.log(removedElem2);

// 4
let addElem = people.unshift("Matt");
console.log(addElem);

// 5
let addElem2 = people.push("Eric");
console.log(addElem2);

// 6
for(let i of people){
    if(people[i] === "Mary") {
        break;
    }
}

// 7
let newArr = people.slice(2,4)
console.log(newArr);

// 8
let index = people.indexOf('Mary');
console.log(index);

// 9
let index2 = people.indexOf('Foo');
console.log(index2);

// 10
let spliced = people.splice(2,2,"Elizabeth", "Artie")
console.log(spliced)

// 11
let withBob = "Bob";
let concatenated = people.concat(withBob);
console.log(concatenated)

