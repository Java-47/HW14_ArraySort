const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
bubbleSort(arr);
printArray(arr);//0,1,1,2,2,2,4,5,9,9
const persons = [new Person(3000, 'Mary', 'Smith', 18), new Person(4000, 'Tigran', 'Petrosian', 42), 
new Person(2000, 'Peter', 'Jackson', '42'), new Person(1000, 'John', 'Smith', 27)];
printArray(persons);
bubbleSortByAge(persons);
printArray(persons);

function bubbleSort(arr){
    let temp;
    for (let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] >  arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            } 
        }     
    }
}

function bubbleSortByAge(persons){
    let temp;
    for (let i = 0; i < persons.length-1; i++){
        for(let j = i+1; j < persons.length; j++){
            if(persons[i].age > persons[j].age){
                temp = persons[i]
                persons[i] = persons[j]
                persons[j] = temp
            }           
        }
    }
}



function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('==========================');
}

function printObject(obj) {
    for (let k in obj) {
        if (typeof obj[k] === 'function') {
            console.log(`${k} -> ${obj[k]()}`);
        } else {
            console.log(`${k} -> ${obj[k]}`);
        }
    }
    console.log('======================');
}

function Person(id, firstName, lastName, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}